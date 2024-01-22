import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css'],
})
export class CustomerCartComponent {

  constructor(
    private httpUserService: UserServiceService,
    private router: Router
  ) {}

  posts: any;

  cart1: Cart[] = new Array();
  ngOnInit() {
    this.httpUserService.getBooks().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  qty: any;
  total: number = 0;

  onaddToCart(id: number, name: string, price: number) {
    this.total = 0;
    //this.name=this.posts.name;
    this.cart1.push(new Cart(name, price, id, this.qty, price * this.qty));
    for (let i of this.cart1) {
      console.log(this.total);
      this.total += i.total;
    }
  }

  cust = new customer('', 0, this.cart1);
  m: any;

  PlaceOrder() {
    this.httpUserService.placeOrder(this.cust).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('your order has been placed successfully') != -1)
          this.router.navigate(['/successful']);
        else document.write(this.m);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
