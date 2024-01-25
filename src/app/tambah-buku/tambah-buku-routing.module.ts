import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahBukuPage } from './tambah-buku.page';

const routes: Routes = [
  {
    path: '',
    component: TambahBukuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahBukuPageRoutingModule {}
