import {Component, OnInit} from '@angular/core';
import { inject } from '@angular/core/testing';
import {Router} from "@angular/router";
import { Book } from './book/Book';
import { BookService } from './book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore';
  books: Book[];

constructor(private bookService: BookService,private router: Router) {
  }


  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };
  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.getBooks();
        },
        error => console.log(error));
  }
  BooksDetails(id: number){
    this.router.navigate(['details', id]);
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getBooks();
    });
  }
}

