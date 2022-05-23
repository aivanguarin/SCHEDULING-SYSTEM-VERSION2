import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "./../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //--FOR THE LOADER--
    public loading: boolean | undefined;

    @Output() login = new EventEmitter<string>();

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService:AuthenticationService, private route:Router) {
        
    }

    ngOnInit(): void {
    }

    loginProcess(){
        this.loading = true;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(
                (res) => {
                    if (res.success) {
                        
                        this.loading = false;
                        localStorage.setItem('token', res['token']);
                        this.route.navigate(["/home"]);
                        this.login.emit(res.first_name);
                        

                    } else {
                        alert(res.message);
                        this.loading = false;
                    }
                }
            );
        }
    }
}