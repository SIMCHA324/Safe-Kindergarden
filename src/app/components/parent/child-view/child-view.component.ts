import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addChildren(){
    debugger;
    this.route.navigate(['add-children'])
  }
  DeleteChild(){
    
  }
  updateChild(){
    
  }
}
