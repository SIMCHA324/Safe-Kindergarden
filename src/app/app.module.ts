import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddChildrenComponent } from './components/parent/add-children/add-children.component';
import {HttpClientModule} from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './components/camera/camera.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
 import { HomeComponent } from './components/home/home.component';
import { UserService } from './shared/models/services/user.service';
import { UpdateChildComponent } from './components/parent/update-child/update-child.component';
import { FormsModule } from '@angular/forms';
// import { AddParentComponent } from './components/institution/add-parent/add-parent.component';
import { ChildViewComponent } from './components/parent/child-view/child-view.component';
import { AddParentComponent } from './components/institution/add-parent/add-parent.component';
import { ChildrenViewComponent } from './components/children-view/children-view.component';
import { ChildrenComponent } from './components/children/children.component';
@NgModule({
  declarations: [
    AppComponent,
    AddChildrenComponent,
    CameraComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ChildViewComponent,
    UpdateChildComponent,
    AddParentComponent,
    ChildrenViewComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WebcamModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
