import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'order-list', loadChildren: './orders/order-list/order-list.module#OrderListPageModule' },
  { path: 'order-details', loadChildren: './orders/order-details/order-details.module#OrderDetailsPageModule' },
  { path: 'order-edit', loadChildren: './orders/order-edit/order-edit.module#OrderEditPageModule' },
  { path: 'order-create', loadChildren: './orders/order-create/order-create.module#OrderCreatePageModule' },
  { path: 'stock-item-list', loadChildren: './StockItem/stock-item-list/stock-item-list.module#StockItemListPageModule' },
  { path: 'stock-item-edit', loadChildren: './StockItem/stock-item-edit/stock-item-edit.module#StockItemEditPageModule' },
  { path: 'stock-item-details', loadChildren: './StockItem/stock-item-details/stock-item-details.module#StockItemDetailsPageModule' },
  { path: 'stock-item-create', loadChildren: './StockItem/stock-item-create/stock-item-create.module#StockItemCreatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
