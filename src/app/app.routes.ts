import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { UploadFile } from './components/upload-file/upload-file';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"upload", component:UploadFile}
];
