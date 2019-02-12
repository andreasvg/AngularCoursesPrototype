import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathPageComponent } from './container/path-page/path-page.component';

const routes: Routes = [
  { path: 'path', component: PathPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
