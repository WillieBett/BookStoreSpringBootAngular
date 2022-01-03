import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AddBookComponent} from "./book/add-book/add-book.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    DeleteBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
