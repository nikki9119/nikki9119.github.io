import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { CertificatesComponent } from './views/certificates/certificates.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'projects', component: ProjectsComponent},
  // {path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
