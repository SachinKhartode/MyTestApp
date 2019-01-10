import { Directive as abc, OnInit } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@abc({
  selector: '[idNumber]'
})
export class IdNumberDirective implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  customValidator(): ValidatorFn {
    Validators.nullValidator
    return (control: AbstractControl): ValidationErrors | null => {

      //any condition to check control value
      if (control.value != "Sachin") {
        //return key value pair of errors
        return { "customError": { inValid: true, errMsg: 'Invalid Value' } };
      }
      return null;
    }
  }
}

export class AccessElementDirective{}