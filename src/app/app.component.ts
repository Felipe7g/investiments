import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `

    <app-invest-table></app-invest-table>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'investiments';

  // public investiments$: Observable<any> | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    // this.http.get("https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653")
    // .subscribe(d => console.log(d));
    // this.investiments$ = this.http.get("https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653");
  }

}
