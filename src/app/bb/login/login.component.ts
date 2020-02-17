import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  error : boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  login(){
    if(this.email === 'b&b@gmail.com' && this.password === '1234'){
     localStorage.setItem('email' , this.email);
     localStorage.setItem('password' , this.password);
     this.router.navigate(['B&B/image']);
    }else{
       this.error = true;
    }
  }


  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');
  }
}
