import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "./../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
});

constructor(private authService:AuthenticationService, private route:Router) {
}

ngOnInit(): void {
}

loginProcess(){
    if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value).subscribe(
            (res) => {
                if (res.success) {
                    localStorage.setItem('token', res['token']);
                    this.route.navigate(["/"]);
                } else {
                    alert(res.message);
                }
            }
        );
    }
}
 

 
  hide = true;

}
