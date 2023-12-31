import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team-member/team-member.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:id', component: TeamMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
