import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBukuPageRoutingModule } from './list-buku-routing.module';

import { ListBukuPage } from './list-buku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBukuPageRoutingModule
  ],
  declarations: [ListBukuPage]
})
export class ListBukuPageModule {}
