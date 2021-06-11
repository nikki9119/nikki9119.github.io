import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionsModule } from '../sections/sections.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, CertificatesComponent, ProjectsComponent],
  imports: [
    CommonModule,
    SectionsModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ViewsModule { }
