import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CameraComponent } from './components/camera/camera.component';
import { AddChildrenComponent } from './components/parent/add-children/add-children.component';
import { ChildViewComponent } from './components/parent/child-view/child-view.component';
import { AddParentComponent } from './components/institution/add-parent/add-parent.component';
import { ChildrenComponent } from './components/children/children.component';
import { UpdateChildComponent } from './components/parent/update-child/update-child.component';

const routes: Routes = [
{path:'',component:SignInComponent, pathMatch:'full' },
{path:'dad/up', component:SignUpComponent},
{path:'sign-in',component:SignInComponent},
{path:'camera',component:CameraComponent},
{path:'add-children', component:AddChildrenComponent},
{path:'child-view', component:ChildViewComponent },
{path:'add-parent', component:AddParentComponent},
{path:'children', component:ChildrenComponent},
{path:'update-child', component:UpdateChildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
