import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-word',
    loadChildren: () => import('./pages/new-word/new-word.module').then( m => m.NewWordPageModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./pages/dictionary/dictionary.module').then( m => m.DictionaryPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'myths',
    loadChildren: () => import('./pages/myths/myths.module').then( m => m.MythsPageModule)
  },
  {
    path: 'thatmyth/:mythId',
    loadChildren: () => import('./pages/thatmyth/thatmyth.module').then( m => m.ThatmythPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
