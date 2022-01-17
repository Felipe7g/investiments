import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invest-table',
  template: `

  <h1 class="title-table">INVESTIMENTOS</h1>

  <table class="table table-hover bg-white table-style">
  <thead>
    <tr>
      <th scope="col">NOME</th>
      <th scope="col">OBJETIVO</th>
      <th scope="col">SALDO TOTAL</th>
    </tr>
  </thead>
  <tbody *ngIf="investiments$ | async as investiment">
    <tr *ngFor="let item of investiment.response.data.listaInvestimentos" (click)="onSelect(item.nome, item.indicadorCarencia)">
      <td>{{item.nome}}</td>
      <td>{{item.objetivo}}</td>
      <td>{{item.saldoTotal | currency: 'BRL': true}}</td>
    </tr>
   
  </tbody>
</table>
  `,
  styles:[
    `
    .table > :not(:first-child) {
      border-top: 1px solid currentColor;
  }

  .table-style {
    margin: 0 auto;
    width: 90%;
    border: 3px solid grey;
  }

  .title-table {
    padding: 1% 0 1% 5%;
  }
  
    `]
})
export class InvestTableComponent implements OnInit {

  constructor(private http: HttpClient,private _router: Router) { }

  public investiments$: Observable<any> | undefined;

  onSelect(item: string, indicador: string) {
    if(indicador == 'N'){
      this._router.navigate(['/investiment', item]);
    }
  }

  ngOnInit(): void {
    this.investiments$ = this.http.get("https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653");
    //this.http.get("https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653")
    //.subscribe(d => console.log(d));
  }

}
