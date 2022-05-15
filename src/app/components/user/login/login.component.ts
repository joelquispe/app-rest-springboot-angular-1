import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : String="";
  password: String = "";
  constructor(private api: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.api.getUserByName(this.name).subscribe(res=>{
      console.log(res);
    })
    this.api.getUsers().subscribe(res=>{
      
     
     Object.values(res).map(value =>{
      if(this.name == value.name && this.password == value.password){
        console.log("joel es pro")
        this.router.navigate(['/usuarios'])
        return;
      } 
    
    })
  })}
}
