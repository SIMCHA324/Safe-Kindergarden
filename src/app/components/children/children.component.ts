import { Component, OnInit } from '@angular/core';
import { children } from 'src/app/shared/models/childrens.model';
import { ChildrenServicesService } from 'src/app/shared/models/services/children-services.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
 allChildren: Array<children>=[];
  constructor(public childrenService:ChildrenServicesService) { }

  ngOnInit(): void {
    this.childrenService.getAllChildren().subscribe(
      res => {
        // this.allChildren=res;
          })    
    
   

   }
     // search function

    //   function  myFunction() {
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("myTable");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }       
    //     }
    //   }
      
    }
 