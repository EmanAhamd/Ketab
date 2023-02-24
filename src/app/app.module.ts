import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { HomeComponent } from './Components/User/Home/home/home.component';
import { NewArrivalsComponent } from './Components/User/New-Arrivals/new-arrivals/new-arrivals.component';
import { EnglishBooksComponent } from './Components/User/English-Books/english-books/english-books.component';
import { ArabicBooksComponent } from './Components/User/Arabic-Books/arabic-books/arabic-books.component';
import { NotFoundPageComponent } from './Components/User/not-found-page/not-found-page.component';
import { NavbareComponent } from './Shared/navbare/navbare.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeNewBooksComponent } from './Components/User/Home/home-new-books/home-new-books.component';
import { BookDetailsComponent } from './Components/User/book-details/book-details.component';
import { BestSellerComponent } from './Components/User/Home/best-seller/best-seller.component';

import { SliderComponent } from './Components/User/Home/slider/slider.component';
import { TopAuthorsComponent } from './Components/User/Home/top-authors/top-authors.component';
import { CartComponent } from './Components/User/Cart/cart/cart.component';
import { ArabicBookItemComponent } from './Components/User/Arabic-Books/arabic-book-item/arabic-book-item.component';
import { EnglishBookItemComponent } from './Components/User/English-Books/english-book-item/english-book-item.component';
import { SearchPipe } from './Core/pipes/search.pipe';
import { ChildrenArabicBookItemComponent } from './Components/User/Children-Books/Children-Arabic/children-arabic-book-item/children-arabic-book-item.component';
import { ChildrenArabicBooksComponent } from './Components/User/Children-Books/Children-Arabic/children-arabic-books/children-arabic-books.component';
import { ChildrenEnglishBookItemComponent } from './Components/User/Children-Books/Children-English/children-english-book-item/children-english-book-item.component';
import { ChildrenEnglishBooksComponent } from './Components/User/Children-Books/Children-English/children-english-books/children-english-books.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewArrivalsComponent,
    EnglishBooksComponent,
    ArabicBooksComponent,
    NotFoundPageComponent,
    NavbareComponent,
    FooterComponent,
    HomeNewBooksComponent,
    BookDetailsComponent,
    SliderComponent,
    TopAuthorsComponent,
    BestSellerComponent,
    CartComponent,
    ArabicBookItemComponent,
    EnglishBookItemComponent,
    SearchPipe,
    ChildrenArabicBookItemComponent,
    ChildrenArabicBooksComponent,
    ChildrenEnglishBookItemComponent,
    ChildrenEnglishBooksComponent

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
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
