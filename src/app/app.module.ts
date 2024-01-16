import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/pages/lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/utilities/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifecycleHooksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
