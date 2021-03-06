import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {combineLatest, Observable} from 'rxjs';
import {map, shareReplay, take, tap} from 'rxjs/operators';
import {AuthenticationService, AuthQuery} from '../../core';
import {ShaderCode} from './shader-code.model';

@Injectable({
  providedIn: 'root'
})
export class ShaderCodeDataService {
  private shaders: Observable<ShaderCode[]>;

  private userShadersCol: AngularFirestoreCollection<ShaderCode>;
  private defaultShadersCol: AngularFirestoreCollection<ShaderCode>;

  constructor(private afs: AngularFirestore, private authentication: AuthenticationService, private authQuery: AuthQuery) {
    const orderByIdQuery = ref => ref.orderBy('id');
    this.defaultShadersCol = this.afs.collection<ShaderCode>(
      '/angularExamples/shaderExamples/defaultShaders',
      orderByIdQuery
    );

    this.userShadersCol = this.afs.collection<ShaderCode>(
      `angularExamples/shaderExamples/${(this.userUid())}`,
      orderByIdQuery
    );
  }

  streamShaders(): Observable<ShaderCode[]> {
    if (this.shaders == null) {
      const defaultShaders = this.defaultShadersCol.valueChanges();
      const userShaders: Observable<ShaderCode[]> = (this.userShadersCol.stateChanges(['added']) as any).pipe(
        map((documentChanges: any) => documentChanges.map(change => change.payload.doc.data()))
      );

      const mapDefaultAndUserShaders = map(([defaults, users]: [ShaderCode[], ShaderCode[]]) =>
        defaults.map(defaultShader => {
          const shaderCode = users.find(sha => sha.id === defaultShader.id);
          return shaderCode != null ? shaderCode : defaultShader;
        })
      );
      this.shaders = combineLatest([defaultShaders, userShaders]).pipe(
        mapDefaultAndUserShaders,
        shareReplay(1));
    }
    return this.shaders;
  }

  async updateShader(shader: ShaderCode, newCode: string) {
    const shaderByIdQuery = this.afs.collection<ShaderCode>(
      `angularExamples/shaderExamples/${(this.userUid())}`,
      ref => ref.where('id', '==', shader.id)
    );
    const batch = this.afs.firestore.batch();
    const newShader = {...shader, ...{code: newCode}};

    const deleteOldShadersAndUpdateInBatch = (shaderByIdQuery.get({}) as any).pipe(
      take(1),
      tap((ref: any) => ref.docs.forEach(doc => doc.ref.delete())),
      tap(ignored => {
        const newUid = this.afs.createId();
        const firestoreDocument = this.afs.doc(
          `angularExamples/shaderExamples/${this.userUid()}/${newUid}`
        );
        firestoreDocument.ref.set(newShader);
      }),
    );

    return deleteOldShadersAndUpdateInBatch.toPromise();
  }

  private userUid() {
    return this.authQuery.profile?.uid;
  }
}
