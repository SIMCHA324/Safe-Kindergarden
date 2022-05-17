import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/models/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 //1.add service to component
  constructor(  private userService:UserService, private route:Router) { }
 
  signInForm: FormGroup | any;
  signInError: boolean = false
  user: User | any;

  ngOnInit(): void {
  this.signInForm= new FormGroup({
    //  בדיקת ולידציה למייל
    mail: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
]))
    // password: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15),
    // Validators.pattern("^[a-z ]*$"), Validators.minLength(2)])),
  })
  }

  //3. creat function
  checkUser(pass:string,mail:string){
    //4.use the service
    this.userService.checkUser(pass,mail).subscribe(res=>{
      this.user=res;
      console.log(res)
      if(this.user.parent!=null){
        this.route.navigate(['child-view'])
        
      }
      else
      if(this.user.institution!=null){
        this.route.navigate(['sign-in'])
      }
      else
      this.route.navigate(['camera'])

    } )
  }
}


