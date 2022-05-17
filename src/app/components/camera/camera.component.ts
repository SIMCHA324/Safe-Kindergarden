import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { mergeMap, Observable, Subject, take, timer } from 'rxjs';
import { Image } from 'src/app/shared/models/image';
import { CameraServiceService } from 'src/app/shared/models/services/camera-service.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  myService: any;
  constructor(private client: HttpClient,private cameraService:CameraServiceService) {

   }
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
    //טיימר לצילום תמונה לפי מספר שניות
    const reloadInterval =60;
    // timer(0, reloadInterval).pipe(
    //   (val) => { this.takeSnapshot() }
    // ).subscribe()
    setInterval(() => { this.takeSnapshot() }, reloadInterval * 1000);
  }

  // פונקצייה האחראית על הצילום
  takeSnapshot(): void {
    console.log('taking picture');
    console.log(this.UrlOfPicture);
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }
urlOfPic:string="";
  handleImage(webcamImage: WebcamImage) {
   // this.urlOfPic= this.getPicture.emit(webcamImage);
  //  console.log();
  this.cameraService.recognize(new Image(webcamImage.imageAsBase64)," ").subscribe(res=>console.log(res));

    // לשרת  webcamImage- לשלוח את התמונה מ 
    // httpClient.
    //this.showWebcam = false;

    console.log(webcamImage.imageAsDataUrl.length) 
    console.log(webcamImage.imageAsDataUrl) 

  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  UrlOfPicture(webcamImage: WebcamImage) {
  //   this.urlOfPic= this.getPicture.emit(webcamImage);
  //  console.log();
  //  this.cameraService.addPage(urlOfPic);
  }
  // get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }
  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
