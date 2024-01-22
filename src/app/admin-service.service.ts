import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './Book';
import { login } from './login';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {

  constructor(private http: HttpClient) {}

  adminsignup(model: login) {
    const url = 'http://localhost:8080/api/admin/signup';
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'text',
    });
    return this.http.post(url, model, { headers, responseType: 'text' });
  }

  adminlogin(model: login) {
    const url = 'http://localhost:8080/api/admin/login/'+model.email+'/'+model.password;
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url,model,{ headers, 'responseType': 'text' });
  }

  
  getBooks() {
    const url = 'http://localhost:8080/api/book/showAllBooks';
    return this.http.get(url);
  }

  updateBook(b: Book) {
    const url = 'http://localhost:8080/api/book/update/' + b.Id;
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, b, { headers });
  }

  deleteBook(id: number) {
    const url = 'http://localhost:8080/api/book/delete/' + id;
    return this.http.delete(url);
  }

  createBook(model: Book) {
    const url = 'http://localhost:8080/api/book/create';
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, model, { headers });
  }



}
