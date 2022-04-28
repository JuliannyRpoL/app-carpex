import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HOME } from './routes';

const routes: Routes = [
  {
    path: HOME,
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: HOME,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
