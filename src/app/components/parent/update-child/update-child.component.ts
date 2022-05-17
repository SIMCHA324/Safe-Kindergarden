import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-child',
  templateUrl: './update-child.component.html',
  styleUrls: ['./update-child.component.css']
})
export class UpdateChildComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  updateChild(){}
}
