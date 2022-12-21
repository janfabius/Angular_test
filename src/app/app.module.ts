import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Prova2Component } from './prova2/prova2.component';
import {MatInputModule} from '@angular/material/input';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MenuOverComponent } from './menu-over/menu-over.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckBox1Component } from './check-box1/check-box1.component';
import { ButtonBouncyComponent } from './button-bouncy/button-bouncy.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    Prova2Component,
    MenuBurgerComponent,
    ListItemComponent,
    MenuOverComponent,
    ContactUsComponent,
    CheckBox1Component,
    ButtonBouncyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
