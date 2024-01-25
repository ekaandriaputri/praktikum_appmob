import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./page/tutorial-list/tutorial-list.module').then( m => m.TutorialListPageModule)
  },
  {
    path: 'tutorial/:id',
    loadChildren: () => import('./page/tutorial-detail/tutorial-detail.module').then( m => m.TutorialDetailPageModule)
  },
  {
    path: 'tutorial-add',
    loadChildren: () => import('./page/tutorial-add/tutorial-add.module').then( m => m.TutorialAddPageModule)
  },  {
    path: 'list-buku',
    loadChildren: () => import('./list-buku/list-buku.module').then( m => m.ListBukuPageModule)
  },
  {
    path: 'tambah-buku',
    loadChildren: () => import('./tambah-buku/tambah-buku.module').then( m => m.TambahBukuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
