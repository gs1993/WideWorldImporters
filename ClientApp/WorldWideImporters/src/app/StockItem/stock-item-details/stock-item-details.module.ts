import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockItemDetailsPage } from './stock-item-details.page';

const routes: Routes = [
  {
    path: '',
    component: StockItemDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockItemDetailsPage]
})
export class StockItemDetailsPageModule {}
