import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddBookComponent} from "./book/add-book/add-book.component";
import {DeleteBookComponent} from "./book/delete-book/delete-book.component";
import {BookDetailsComponent} from "./book/book-details/book-details.component";

const routes: Routes = [
  {path: 'list-books', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-book', component: AddBookComponent},
  {path: 'delete-book',component: DeleteBookComponent},
  {path: 'Book-Details',component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
