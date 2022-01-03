import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Book} from "../Book";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private bookService: BookService,private book: Book ,private router: Router) { }

  ngOnInit(): void {
    this.bookService.deleteBook(this.book.id)
      .subscribe(data => {
        this.router.navigate(['Delete-Books'])
      })
  }

}
