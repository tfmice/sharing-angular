import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from '../../../team-services';
import { AddEmployeeModel, EmployeeViewModel } from '../../../client';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent {
  id: number;
  members: EmployeeViewModel[];
  constructor(private route:ActivatedRoute, private teamService:TeamService){}
  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeamMembers(this.id).subscribe((emp)=>{
      this.members = emp;
    });
  }
  Add() {
    let form = new AddEmployeeModel();
    const currDate = new Date();
    // console.log(currDate)
    form.birthdate = (currDate.getMonth()+1)+'/'+currDate.getDate()+'/'+currDate.getUTCFullYear()
    // console.log(member.birthdate)
    form.hobby = ''
    form.name = ''
    form.opinion = ''
    form.quote = ''
    form.role = ''
    form.teamId = this.id
    this.teamService.addMember(form).subscribe((emp)=>{
      this.members.push(emp)
    });
  }
  Delete(index:number){
    // console.log(index)
    const member = this.members.splice(index, 1);
    // console.log(member) 
    console.log(member[0].id)
    this.teamService.delMember(member[0].id).subscribe(()=>{
      console.log('deleted')
    })
  }
  Update(event:{emp: EmployeeViewModel, idx:number})
  {
    console.log(event.emp);
    this.teamService.updMember(event.emp).subscribe(()=>{
      console.log('updated')
    })
    this.members[event.idx] = event.emp;
  }
}
