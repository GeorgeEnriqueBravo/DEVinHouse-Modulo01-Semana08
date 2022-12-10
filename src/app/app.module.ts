import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltroComponent } from './filtro/filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const rotas: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: HomeComponent,
        data: { status: 'todos' }
      },
      {
        path: 'lidos',
        component: HomeComponent,
        data: { status: 'lidos' }
      },
      {
        path: 'nao-lidos',
        component: HomeComponent,
        data: { status: 'nao-lidos' }
      }
    ]
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    HeaderComponent,
    FooterComponent,
    FiltroComponent,
    HomeComponent,
    SobreComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(ROUTES)
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
