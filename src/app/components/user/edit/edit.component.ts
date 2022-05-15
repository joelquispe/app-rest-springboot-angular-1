import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name : String="";
  password: String = "";
  id:string|null = "";
  user: any;
  constructor(private api:UserService ,private router:Router,private aRoute : ActivatedRoute) {}

  ngOnInit(): void {
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.dataUser();
  }

  dataUser(){
   
    this.api.getUserById(this.id).subscribe(user =>{
      
      this.user = user;
      console.log(this.user)
    })
    
  }
  updateUser(){
    this.api.updateUser(this.user.id,this.user.name,this.user.password).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/usuarios']);
    })

  }
}
