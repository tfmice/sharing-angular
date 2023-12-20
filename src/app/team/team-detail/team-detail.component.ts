import { Component, Input } from '@angular/core';
import { TeamViewModel } from '../../../../client';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})
export class TeamDetailComponent {
  @Input() team: TeamViewModel;

  getStyle(){
    if(this.team.id % 2 == 0){
      return 'bg-body-secondary'
    }
    return 'bg-body-tertiary'
  }
}
