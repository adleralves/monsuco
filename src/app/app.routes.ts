import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ComodatoComponent } from './components/comodato/comodato.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'comodato', component: ComodatoComponent },
  { path: '**', redirectTo: '/home' }
];
