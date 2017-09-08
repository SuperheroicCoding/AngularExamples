import {Component, OnInit} from '@angular/core';
import {Technology} from './technology';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public technologies = [
    new Technology('Angular 4', 'http://angular.io/', 'assets/logos/angular.png'),
    new Technology('Angular CLI', 'https://cli.angular.io/', 'assets/logos/angular-cli.svg'),
    new Technology('Angular Material', 'http://angular.material.io/', 'assets/logos/angular-material.svg'),
    new Technology('Typescript', 'http://www.typescriptlang.org/', 'assets/logos/typescript.svg'),
    new Technology('p5js', 'https://p5js.org', 'assets/logos/p5.svg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
