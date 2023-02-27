import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBookComponent } from './Admin/admin-book/admin-book.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { ArabicBooksComponent } from './Components/User/Arabic-Books/arabic-books/arabic-books.component';
import { BookDetailsComponent } from './Components/User/book-details/book-details.component';
import { CartComponent } from './Components/User/Cart/cart/cart.component';
import { ChildrenArabicBooksComponent } from './Components/User/Children-Books/Children-Arabic/children-arabic-books/children-arabic-books.component';
import { ChildrenEnglishBooksComponent } from './Components/User/Children-Books/Children-English/children-english-books/children-english-books.component';
import { EnglishBooksComponent } from './Components/User/English-Books/english-books/english-books.component';
import { HomeComponent } from './Components/User/Home/home/home.component';
import { NewArrivalsComponent } from './Components/User/New-Arrivals/new-arrivals/new-arrivals.component';

import { NotFoundPageComponent } from './Components/User/not-found-page/not-found-page.component';

import { AdminSidebarComponent } from './Admin/admin-sidebar/admin-sidebar.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'new', component: NewArrivalsComponent },
  { path: 'english', component: EnglishBooksComponent },
  { path: 'arabic', component: ArabicBooksComponent },
  { path: 'childrenEnglish', component: ChildrenEnglishBooksComponent },
  { path: 'childrenArabic', component: ChildrenArabicBooksComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book/:id', component: BookDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundPageComponent },

  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-book', component: AdminBookComponent  },
  { path: 'admin-sidebar', component: AdminSidebarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
