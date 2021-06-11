import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activatedRoute!: string;
  isLightTheme = false;
  isNotHome: boolean = false;
  isHandset$: Observable<boolean>;
  constructor(private router: Router,private services: ServicesService) {
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        console.log(event.url);
        this.activatedRoute = event.url;
        if(this.activatedRoute == '/home' || this.activatedRoute == '/'){
          this.isNotHome = false;
        }else{
          this.isNotHome = true;
        }
        console.log(this.isNotHome);
      }
    });
    this.isHandset$ = services.IsHandset$
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
  }

  ngOnInit(): void {
    this.isLightTheme = localStorage.getItem('theme') === 'light'? true:false;
  }
  changeTheme(){
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('theme',this.isLightTheme?'light':'dark');
  }
}
