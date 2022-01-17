import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestTableComponent } from './invest-table/invest-table.component';
import { InvestimentDetailComponent } from './investiment/investiment.component';

const routes: Routes = [
  {path: 'investiment', component: InvestTableComponent},
  {path: 'investiment/:name', component: InvestimentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
