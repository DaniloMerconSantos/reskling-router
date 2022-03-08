import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  title = 'reskling-router';

  ngOnInit(): void {
    this.router.events
    .pipe(map(()=> this.activeRoute))
    .pipe(
      map((route)=>{
        while (route.firstChild) route = route.firstChild;
        return route;
      })
    )
    .pipe(switchMap((route)=> route.data))
    .subscribe((event)=> this.titleService.setTitle(event.title));
  }
}
