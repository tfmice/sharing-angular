import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamService } from '../../team-services';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { MemberDetailComponent } from './team-member/member-detail/member-detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TeamComponent,
    TeamMemberComponent,
    TeamDetailComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(), TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


