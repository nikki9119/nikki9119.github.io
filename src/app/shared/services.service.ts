import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  IsHandset$: Observable<BreakpointState> = this.breakpointObserver.observe('(max-width: 900px)');
  // .pipe(
  //   map(result => result.matches),
  //   shareReplay()
  // );
}
