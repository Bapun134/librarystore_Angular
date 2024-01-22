import { Component } from '@angular/core';
import { login } from '../login';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  model: login = new login('', '');
  posts: any;

  constructor(
    private httpUserService: UserServiceService,
    private router: Router,
    private httpAdminService: AdminServiceService
  ) {}

// admin

  adminsignup() {
    this.httpAdminService.adminsignup(this.model).subscribe((response: string) => {
      this.posts = response;
    });
  }

  adminlogin() {
    this.httpAdminService.adminlogin(this.model).subscribe((response: string) => {
      this.posts = response;
      if (this.posts === 'you are welcome')
        this.router.navigate(['/admin']);
      else alert(this.posts);
    });
  }


  //user

  usersignup() {
    this.httpUserService.usersignup(this.model).subscribe((response: string) => {
      this.posts = response;
      //if(this.posts==="Account has been created")
      //this.router.navigate(['/home'])
    });
  }

  userlogin() {
    this.httpUserService.userlogin(this.model).subscribe((response: string) => {
      this.posts = response;
      if (this.posts === 'you are welcome')
        this.router.navigate(['/customerCart']);
      else alert(this.posts);
    });
  }

  
}
