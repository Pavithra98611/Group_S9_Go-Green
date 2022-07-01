import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropTipsPage } from './crop-tips.page';

const routes: Routes = [
  {
    path: '',
    component: CropTipsPage
  },
  {
    path: 'addtip',
    loadChildren: () => import('./addtip/addtip.module').then( m => m.AddtipPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropTipsPageRoutingModule {}
