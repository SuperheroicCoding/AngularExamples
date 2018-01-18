import {Component} from '@angular/core';
import {AppRoute, AppRouteData, routes} from './app-routing.module';
import {ActivatedRoute, Data, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, switchMap, switchMapTo, tap} from 'rxjs/operators';
import {TitleService} from './core/title.service';

const routerLinks = routes.filter((route) => route.data ? route.data.linkText : false);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerLinks: AppRoute[];

  // we need title service to update page title.
  constructor(private titleService: TitleService) {
    this.routerLinks = routerLinks;
  }
}

