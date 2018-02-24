import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RegisterComponent } from './register/register.component';
import { TransferComponent } from './transfer/transfer.component';
import { DeliverComponent } from './deliver/deliver.component';

import { QRCodeModule } from 'angularx-qrcode';

const appRoutes: Routes = [
  { path: 'home', component: MainScreenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'deliver', component: DeliverComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: MainScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    RegisterComponent,
    TransferComponent,
    DeliverComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    QRCodeModule,
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
