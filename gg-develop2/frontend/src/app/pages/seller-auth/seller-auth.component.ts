import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent  {
  sellerAuthObj:any={
    "Name": "",
    "Mail": "",
    "pwd": "",
    "IsAdmin": false,
    
    
  };
  http = inject(HttpClient);
  constructor(private router:Router){

  }
  onSellerAuth(){
    debugger;
    this.http.post("http://localhost:8000/User",this.sellerAuthObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Signin Success");
        localStorage.setItem("angular18Login",this.sellerAuthObj.User) ;
        this.router.navigateByUrl("profile")
      }else{
        alert("Signin Success");
      }
    })
  }
  
  
  
  
  

}
