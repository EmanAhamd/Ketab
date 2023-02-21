import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { HomeComponent } from './Components/User/Home/home/home.component';
import { NewArrivalsComponent } from './Components/User/New-Arrivals/new-arrivals/new-arrivals.component';
import { EnglishBooksComponent } from './Components/User/English-Books/english-books/english-books.component';
import { ArabicBooksComponent } from './Components/User/Arabic-Books/arabic-books/arabic-books.component';
import { ChildrenBooksComponent } from './Components/User/Children-Books/children-books/children-books.component';
import { NotFoundPageComponent } from './Components/User/not-found-page/not-found-page.component';
import { NavbareComponent } from './Shared/navbare/navbare.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeNewBooksComponent } from './Components/User/Home/home-new-books/home-new-books.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewArrivalsComponent,
    EnglishBooksComponent,
    ArabicBooksComponent,
    ChildrenBooksComponent,
    NotFoundPageComponent,
    NavbareComponent,
    FooterComponent,
    HomeNewBooksComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
