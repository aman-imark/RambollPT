import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./pages/app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'sustainable',
    loadChildren: () => import('./pages/sustainable/sustainable.module').then( m => m.SustainablePageModule)
  },
  {
    path: 'sustainable-detail',
    loadChildren: () => import('./pages/sustainable-detail/sustainable-detail.module').then( m => m.SustainableDetailPageModule)
  },
  {
    path: 'qr-voucher',
    loadChildren: () => import('./pages/qr-voucher/qr-voucher.module').then( m => m.QrVoucherPageModule)
  },
  {
    path: 'after-welcome',
    loadChildren: () => import('./pages/after-welcome/after-welcome.module').then( m => m.AfterWelcomePageModule)
  },
  {
    path: 'select-option',
    loadChildren: () => import('./pages/select-option/select-option.module').then( m => m.SelectOptionPageModule)
  },
  {
    path: 'table-detail',
    loadChildren: () => import('./modals/table-detail/table-detail.module').then( m => m.TableDetailPageModule)
  },
  {
    path: 'table-status',
    loadChildren: () => import('./pages/table-status/table-status.module').then( m => m.TableStatusPageModule)
  },
  {
    path: 'table-book',
    loadChildren: () => import('./pages/table-book/table-book.module').then( m => m.TableBookPageModule)
  },
  {
    path: 'book-status',
    loadChildren: () => import('./pages/book-status/book-status.module').then( m => m.BookStatusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
