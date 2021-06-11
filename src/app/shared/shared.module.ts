import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProfileFabComponent } from './profile-fab/profile-fab.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { EducationCardComponent } from './education-card/education-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { StatusComponent } from './status/status.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';


@NgModule({
  declarations: [ProfileFabComponent, NavComponent, EducationCardComponent, StatusComponent, ExperienceCardComponent, 
                  SkillCardComponent, CertificateCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    InlineSVGModule.forRoot({baseUrl:'assets/svg/'})
  ],
  exports: [
    ProfileFabComponent,
    NavComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    CertificateCardComponent
  ]
})
export class SharedModule { }
