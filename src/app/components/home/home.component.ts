import {Renderer2,Inject, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) { }
    // const player = document.getElementById('player');
    // const canvas = document.getElementById('canvas');
    // const context = this.canvas.getContext('2d');
    // const captureButton = document.getElementById('capture');
  ngOnInit(): void {

    // let script = this._renderer2.createElement('script');
    //     script.text = this.newMethod();

        // this._renderer2.appendChild(this._document.body, script);
        // this._renderer2.appendChild(this._document, script);
    }
  

  // private newMethod(): any {
  //   return 
  //           {
  //               "@context": "https://schema.org"
               
              
  //               const constraints = {
  //                 video: true,
  //               };
              
  //               captureButton.addEventListener('click', () => {
  //                 context.drawImage(player, 0, 0, canvas.width, canvas.height);
  //             console.log();
  //                 // <strong>
  //                 // //   Stop all video streams. player.srcObject.getVideoTracks().forEach(track => track.stop());
  //                 // </strong>;
  //               });
              
  //               navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  //                 // Attach the video stream to the video element and autoplay.
  //                this.player.srcObject = stream;
                  
  //               });
  //           }
  //       ;
  // }

  camera(){
    this.route.navigate(['camera'])
  }
}
