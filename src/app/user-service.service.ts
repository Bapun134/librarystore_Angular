import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { customer } from './Customer';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  usersignup(model:login)
  {
    const url="http://localhost:8080/api/user/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers,'responseType': 'text'});

  }

  userlogin(model:login)
  {
     const url="http://localhost:8080/api/user/login";
     var headers=new HttpHeaders({'Content-Type':'application/json'});
     return this.http.post(url,model,{headers,'responseType': 'text'});
  }
  
  getBooks()
  {
    const url="http://localhost:8080/api/book/showAllBooks";
  return this.http.get(url);

  }

  placeOrder(cust:customer)
  {
    const url="http://localhost:8080/api/book/orderbook"
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    //var respose=new HttpResponse({'Response-Type': 'text'});
    return this.http.post(url,cust,{headers,'responseType': 'text'});
     //this.http.get.toString();
  }


  
}
