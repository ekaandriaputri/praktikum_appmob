import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBukuPage } from './list-buku.page';

const routes: Routes = [
  {
    path: '',
    component: ListBukuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBukuPageRoutingModule {}
