import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  //Componente principal
  {path: '', component: TitleComponent, pathMatch: 'full'}, //full é pra quando quero a url exata
  //portfolio
  //portfolio/1
  //portfolio/1/abc
  {path: 'portfolio', component: CardComponent, children: [
    {path: ':id', component: CardComponent},
    {path: ':id/:utoken', component: CardComponent},
  ]},
  //Rotas coringa é representada com "**"
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
