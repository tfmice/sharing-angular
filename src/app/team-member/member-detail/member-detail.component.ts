import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeViewModel } from '../../../../client';
import { TeamService } from '../../../../team-services';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent {


  @Input() emp:EmployeeViewModel;
  @Input() index:number;
  @Output() delEvent = new EventEmitter<number>();
  @Output() updEvent = new EventEmitter<{emp:EmployeeViewModel, idx:number}>();
  birthdate:Date;
  constructor(private teamService:TeamService){}
  ngOnInit(){
    let offset = new Date().getTimezoneOffset();
    // console.log(offset)
    if(offset < 0) offset = offset*-1
    const parts:string[] = this.emp.birthdate.split('/'); //mm-dd-yy
    console.log(parts)
    this.birthdate = new Date(+parts[2], +parts[0]-1, +parts[1], offset/60);
  }
  
  Delete(){
      this.delEvent.emit(this.index)
  }

  Update(){
    this.updEvent.emit({emp: this.emp, idx:this.index})
  }
}
