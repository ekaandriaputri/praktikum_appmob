import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahBukuPageRoutingModule } from './tambah-buku-routing.module';

import { TambahBukuPage } from './tambah-buku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahBukuPageRoutingModule
  ],
  declarations: [TambahBukuPage]
})
export class TambahBukuPageModule {}
