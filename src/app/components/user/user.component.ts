import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : String="";
  password: String = "";
  users : any;
  constructor(private api : UserService ){
    
    this.appGetUsers();
    
    
  }
  appGetUsers(){
    this.api.getUsers().subscribe(resp =>{
      
      this.users = resp;
      });
  }
  appGetUser(name:String){
    this.api.getUser(name).subscribe(resp=>{
      console.log(resp)
    })
  }
  mostrar(){
    console.log(this.users)
  }
  saveUser(){
    this.api.saveUser(this.name,this.password).subscribe(resp=>{
      this.appGetUsers();
      this.cleanFields();
    });
     
  }
  deleteById(id: number){
    this.api.deleteUser(id).subscribe(resp=>{
      this.appGetUsers();
      
      console.log(resp)
    });
    window.location.reload();
    
  }
  cleanFields(){
    this.name ="";
    this.password ="";
  }
  ngOnInit(): void {
    
  }

}
