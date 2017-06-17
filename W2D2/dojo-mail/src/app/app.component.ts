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
  title = 'app';
  myArray = [
    {
      email: "bill@gates.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in year 2100."
    },
    {
      email: "ada@lovelace.com",
      importance: true,
      subject: "Programming",
      content: "Enchantress of numbers"
    },
    {
      email: "john@carmac.com",
      importance: false,
      subject: "Updated Algo",
      content: "New algorithm for shadow volumes"
    }
  ]
}
