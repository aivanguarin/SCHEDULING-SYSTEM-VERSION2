import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(["/"])
  }
  
  name="";
  onLogin(user: any) {
    this.name = user;
    }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
    
}
}
