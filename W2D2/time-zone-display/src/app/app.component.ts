import { Component } from '@angular/core';

// object that holds meta-data 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// this class inherits the meta-data and functinoality of the @Component decorator
// this class represents the JavaScript for interactivity and anmimations
export class AppComponent {
  title = 'app'

  myTime = new Date()
  //console.log(myTime)
  someHoursLater = new Date(this.myTime.getTime()+1000*60*60*6)


}
