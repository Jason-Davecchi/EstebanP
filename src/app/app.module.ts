import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ComponentesProductComponent } from './componentes-product/componentes-product.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DetailsPrductScreenComponent } from './screens/details-prduct-screen/details-prduct-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    NavBarComponent,
    ComponentesProductComponent,
    SideBarComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    DetailsPrductScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
