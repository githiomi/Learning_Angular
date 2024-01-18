import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/pages/lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/utilities/header/header.component';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LifecycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
