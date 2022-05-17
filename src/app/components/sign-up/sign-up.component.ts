 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-set-family',
//   templateUrl: './set-family.component.html',
//   styleUrls: ['./set-family.component.css']
// })
// export class SetFamilyComponent implements OnInit {


//   constructor(
//     private dialogRef: MatDialogRef<SetFamilyComponent>,
//     ) { }

//    form = this.fb.group({
//     LastName: this.fb.control("", [Validators.required]),
//     HusbandName: this.fb.control("",),
   
//   });
  

    //   else {
    //     Swal.fire('Ooops', 'כתובת לא תקינה', 'error')
    //   }
    // });
  

//   ngOnInit() {
//     if (this.data && this.data.familyId) {
//       this.familyWithScoreService.getFamilyById(this.data.familyId).subscribe((response) => {
//         this.form = this.fb.group(response);

//         this.form.patchValue({
//           // "Id":''+response.Id,
//           "LastName": '' + (!response.LastName?'':response.LastName),
//           "Mail": '' + (!response.Mail ? '123@example.com':response.Mail),
//         });
//       });
//     }
//   }
//   close() {
//     if (this.dialogRef && this.dialogRef.close) {
//       this.dialogRef.close();
//     }
//   }
//   save() {
//     const family = <FamilyDetails>this.form.value;
//     console.log(family)
//     if (!this.data || !this.data.familyId) {
//       });
//     }
//   }
// }

