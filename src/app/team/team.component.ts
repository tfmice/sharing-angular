import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamViewModel } from '../../../client';
import { TeamService } from '../../../team-services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',  
})
export class TeamComponent {
  constructor(private router:Router, private route:ActivatedRoute, private teamService:TeamService){}
  teams:TeamViewModel[];

  ngOnInit(){
    this.teamService.getTeams().subscribe((t)=>{
      this.teams = t;
    });
    
  }

}
