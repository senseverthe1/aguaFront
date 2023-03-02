import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateClientComponent } from './components/view/create-client/create-client.component';
import { HomeComponent } from './components/view/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create/clients",
    component: CreateClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
