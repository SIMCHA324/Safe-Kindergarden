import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { children } from 'src/app/shared/models/childrens.model';
import { ChildrenServicesService } from 'src/app/shared/models/services/children-services.service';

@Component({
  selector: 'app-add-children',
  templateUrl: './add-children.component.html',
  styleUrls: ['./add-children.component.css']
})
export class AddChildrenComponent implements OnInit {
  // Children: children = new children();
newChildrenToAdd:children= new  children();

 addChildrenForm:FormGroup|any;
failedMessage=false;
  constructor(private childrenService: ChildrenServicesService) { 
    
  }

  ngOnInit(): void {
    this.addChildrenForm= new FormGroup({
      firsName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15),
        Validators.pattern("^[a-z ]*$"), Validators.minLength(2)])),

      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15),
      Validators.pattern("^[a-z ]*$"), Validators.minLength(2)])),
    })
    // this.addChildren();
    // this.childrenService.getChild().subscribe(
    //   res => { console.log('num childe' + res) },
    //   err => { console.error(err) }
    // )
  }

  //this function works after all the inputs true and on click save student.
  addChildren(idChild:string,firsName:string,lastName:string
   ) {

    // ,idParent1:string,idParent2:string,idInstitution:string,tzChaild:string

    //todo: get the information about the children to this.children

    this.newChildrenToAdd.idChild;
    this.newChildrenToAdd.firstName = "";
    this.newChildrenToAdd.lastName = "";
    this.newChildrenToAdd.class = "";
    this.newChildrenToAdd.idParent1;
    this.newChildrenToAdd.idParent2;
    this.newChildrenToAdd.idInstitution;
    this.newChildrenToAdd.tzChaild;
    this.newChildrenToAdd.image;

    //send children to server


    // this.childrenService.addChild(this.newChildrenToAdd).subscribe(
    //   res => { console.log(res) },
    //   err => { console.error(err) }
    // )
  }

}
