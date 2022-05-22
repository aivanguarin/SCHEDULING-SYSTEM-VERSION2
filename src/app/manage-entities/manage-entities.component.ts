import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import {
  USER,
  INSTRUCTOR
} from '../types';

export interface Users {
  id: number;
  name: string;
  username: string;
  active: string;
}

@Component({
  selector: 'app-manage-entities',
  templateUrl: './manage-entities.component.html',
  styleUrls: ['./manage-entities.component.css']
})
export class ManageEntitiesComponent implements OnInit {
  
  usersRowDef: string[] = ['id', 'name', 'username', 'active'];
  usersData: USER[] = [];
  instructorsData: INSTRUCTOR[] = [];
  instructorsRowDef: string[] = ['id', 'name', 'username', 'role', 'active'];
  
  newUserForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middle_name: new FormControl('', [Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    suffix_name: new FormControl('', [Validators.maxLength(5)]),
    sex: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    is_active: new FormControl('', [Validators.required]),
    college_id: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    salutation: new FormControl('', [Validators.maxLength(5)]),
    admin_function: new FormControl('', [Validators.maxLength(20)]),
    admin_hrs: new FormControl('', [Validators.maxLength(8)]),
    max_load: new FormControl('', [Validators.maxLength(8)]),
    course_id: new FormControl('', [Validators.maxLength(8)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required])
  });
  


  editUserForm = new FormGroup({
    id: new FormControl(''),
    first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middle_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required])
  });

  public usersTableReady = false;
  public showNewUserPopup = false;                                                       // !!
  public showEditUserPopup = false;

  row!: Users;

  constructor(private authService:AuthenticationService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getInstructors();
  }

  getInstructors(){
    this.authService.getInstructors().subscribe(
        (res) => {
          this.instructorsData = res['data'];
          console.log(this.instructorsData);
        },
        (err) => {
          console.log(err);
          this.instructorsData = [];
        }
    );
  }
  
  getUsers(){
    this.authService.getUsers().subscribe(
        (res) => {
          this.usersData = res['data'];
          console.log(this.usersData);
        },
        (err) => {
          console.log(err);
          this.usersData = [];
        }
    );
    this.usersTableReady = true;
  }

  newUserProcess(){
    if(this.newUserForm.valid){
      this.authService.newUser(this.newUserForm.value).subscribe(
        (res) => {
          if(res.success){
            this.showNewUserPopup = false;
            this.usersTableReady = true;
            this.getUsers();
          }
        }
      )
    }
    console.log(this.newUserForm);
  }

  rowClicked(row:Users){
    this.row = row;
  }

  deleteUserProcess(){
    this.authService.deleteUser(this.row.id).subscribe(
      (res) => {
        console.log(res);
        this.usersTableReady = false;
        this.getUsers();
      }
    );
  }

  editUserProcess(){
    if(this.editUserForm.valid){
      this.editUserForm.value.id = this.row.id;
	  console.log('here1');
      this.authService.updateUser(this.editUserForm.value).subscribe(
        (res) => {
          if(res.success){
	  console.log('here2');
            this.showEditUserPopup = false;
            this.usersTableReady = false;
            this.getUsers();
          }
        }
      );
	  
	  console.log('here3');
    }
  }

  instructorNameUtil(id:number){
    var _inst = this.instructorsData.find(
      data => data.id === id
    );
    
    if(_inst){
      console.log(_inst);
      return _inst.last_name + ", " + _inst.first_name;
    }
    return "";
  }
}
