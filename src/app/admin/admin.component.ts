import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Book } from '../Book';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private httpAdminService: AdminServiceService, private router: Router) {}

  posts: any;
  model: any;
  //model2:any;

  ngOnInit() {
    this.httpAdminService.getBooks().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update(id: number, bookName: string, authorName:string, stk: number, price: number) {
    this.model = new Book(id, bookName, authorName, stk, price);
    this.httpAdminService.updateBook(this.model).subscribe((response) => {
      this.posts = response;
    });
    window.location.reload();
  }

  delete(id: number) {
    this.httpAdminService.deleteBook(id).subscribe((response) => {
      this.posts = response;
    });
    window.location.reload();
  }

  model2 = new Book(1, 'Book Name','Author Name', 0, 0);
  create(model2: Book) {
    this.httpAdminService.createBook(this.model2).subscribe((response) => {
      console.log(response);
    });
    window.location.reload();
  }

}
