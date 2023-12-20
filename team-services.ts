import { Observable } from "rxjs";
import { AddEmployeeModel, EmployeeViewModel, TeamViewModel, UpdateEmployeeModel } from "./client";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TeamService{
    constructor(private http:HttpClient){}
    getTeams():Observable<TeamViewModel[]>{
        return this.http.get<TeamViewModel[]>('https://localhost:7047/Employee/GetAllTeams');
    }
    getTeamMembers(id:number):Observable<EmployeeViewModel[]>{
      return this.http.get<[]>(`https://localhost:7047/Employee/GetTeamMembersByTeamId?teamId=${id}`);
    }
    addMember(form:AddEmployeeModel):Observable<EmployeeViewModel>{
      return this.http.post<EmployeeViewModel>('https://localhost:7047/Employee/AddEmployee', form);
    }
    delMember(id:number):Observable<void>{
      return this.http.delete<void>('https://localhost:7047/Employee/DeleteEmployeeById', {body:id, headers:{
        'Content-Type': 'application/json'
      }});
    }
    updMember(form:UpdateEmployeeModel):Observable<void>{
      return this.http.post<void>('https://localhost:7047/Employee/UpdateEmployeeById', form)
    }
}

