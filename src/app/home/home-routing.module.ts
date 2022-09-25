import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesListComponent,
  },
  // {
  //   path: 'detail/:id',
  //   component: RegisterComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
