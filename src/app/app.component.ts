import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sharing-angular';
  // test = '';
  // ngOnInit(){
  //   fetch("https://localhost:7047/WeatherForecast/Test").then((res)=>{
  //     res.text().then(resT => this.test = resT);
  //     console.log(res.headers);

  //   }, err => {
  //     console.error(err);
  //   })
  // }
}
