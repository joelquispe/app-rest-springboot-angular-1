import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "/api/usuario";
  urlname = "/api"
  constructor(private http: HttpClient) { }

  getUsers(){
    let header = new HttpHeaders();
    header.set('Type-content', 'aplication/json');
    header.set("Access-Control-Allow-Origin", "*")
    return this.http.get(this.url);
  }
  getUser(name: String){
    return this.http.get(this.urlname+"/"+name);
  }
  getUserByName(name:String|null){
    return this.http.get(this.urlname+"/"+name);
  }

  getUserId(id: number){
    return this.http.get(this.url+"/"+id);
  }
  getUserById(id:string|null){
    return this.http.get(this.url+"/"+id);
  }
  saveUser(name:String , password:String){
   
      return this.http.post(this.url,{
        
        "name":name,
        "password":password
      })
   
    
    
  }
  updateUser(id : number,name:String , password:String){
    return this.http.post(this.url,{
      "id":id,  
      "name":name,
      "password":password
    })
  }

  deleteUser(id: number){
    
    return this.http.delete(this.url +"/"+ id);
  }


}
