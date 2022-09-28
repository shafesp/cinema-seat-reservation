import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    fullname : new FormControl('', Validators.required),
    mobno : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confPassword : new FormControl('',[Validators.required,this.confirmPasswordCheck])
  })

  constructor(private usersService: UsersService,  public router: Router) { }



  confirmPasswordCheck(control: AbstractControl){
    if (control && control.value !== null || control.value != undefined){
      const cnfPassword = control.value;
      const passControl = control.root.get('password')

      if (passControl){
        const passValue = passControl.value;
        if (passValue !== cnfPassword){
          return {
            isError: true
          }
        }
      }
    } 
    return null
  }

  reset(){
    this.form.reset();
  }

}
