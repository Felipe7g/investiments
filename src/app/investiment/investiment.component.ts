import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investiment',
  template: `
  <h1 class="title-table">DADOS DO INVESTIMENTO</h1>
    <div class="primary-box">
        <section>
          <img src="">

          <div style="display: flex; flex-direction: column;">
             <h2>NOME</h2>
             <h3>INVESTIMENTO III</h3>
          </div>
        </section>

        <section>
          <img src="">

          <div style="display: flex; flex-direction: column;">
             <h2>OBJETIVO</h2>
             <h3>Abrir meu próprio negócio</h3>
          </div>
        </section>

        <section>
          <img src="">
          <div style="display: flex; flex-direction: column;">
          <h2>SALDO TOTAL</h2>
          <h3>R$26.000,00</h3>
          </div>
        </section>
    </div> 

    <h1 class="title-table">RESGATE</h1>

    <table class="table table-hover bg-white table-style">
     <thead>
        <tr>
          <th scope="col">AÇÃO</th>
          <th scope="col">SALDO ACUMULADO</th>
         <th scope="col">SALDO TOTAL</th>
        </tr>
     </thead>
     <tbody>
        <tr>
           <td>Banco do Brasil</td>
           <td>R$10.686,00</td>
           <td><input type="text"></td>
        </tr>
   
     </tbody>
    </table>

    <div class="primary-box" style="margin-top: 25px; height: 60px;">
        <section>
          <h2 style="align-self: center; font-size: 1.2rem">Valor Total do resgate: <span>R$15.000,00</span></h2>
        </section>
    </div>

    <div class="buttons-box" style="margin-top: 25px;">
        <section class="double-btns">
           <button class="cancel-btn">CANCELAR</button>
           <!-- Button trigger modal -->
           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              CONFIRMAR RESGATE
           </button>

    <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body align-center">
               Resgate efetuado com sucesso!
            </div>
            <div class="modal-footer" style="justify-content: center;">
            <button type="button" class="btn btn-primary">NOVO RESGATE</button>
          </div>
        </div>
     </div>
    </div>
  </section>
</div>

    
  `,
  styles: [
    `
     .table > :not(:first-child) {
       border-top: 1px solid currentColor;
     }

    .table-style {
      margin: 0 auto;
      width: 90%;
      border: 3px solid grey;
     }

     .primary-box {
       display: flex;
       justify-content: space-between;
       background: white;
       margin: 0 auto;
       width: 90%;
       height: 80px;
       border: 3px solid grey;
     }

     .primary-box section {
       display: flex;
       width: 33%;
       height: 60%;
       margin: auto 0;
       padding-left: 20px;
     }

     .primary-box section img {
      width: 45px;
      height: 45px;
      border: 1px solid red;
     }
     .primary-box section h3 {
      font-size: 0.7rem;
     }

     .primary-box section h2 {
       font-size: 1rem;
     }

     .primary-box section:nth-child(2) {
      border-right: 2px solid lightgrey;
      border-left: 2px solid lightgrey;
    }

     .title-table {
      padding: 1% 0 1% 5%;
    }

    .buttons-box {
      display: flex;
      justify-content: right;
      background: transparent;
      margin: 0 auto;
      width: 90%;
      height: 80px;
    }

    .double-btns {
      display: flex;
      justify-content: right;
      gap: 15px;
      width: 30%;
      height: 40px;
    }

    .cancel-btn {
      width: 40%;
      background: #85929E;
      color: white;
      border: 0;
    }

    .align-center {
      text-align: center;
      font-size: 1.3rem;
    }

    `
  ]
})
export class InvestimentDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public investimentId: any;

  ngOnInit(): void {
    
    this._route.params.subscribe((params: any) => {
      this.investimentId = params['name'];
    });
  }

}
