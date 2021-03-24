import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningAngular';
  appareils = [
    {
      name: 'machine à laver',
      status: 'allumer'
    },
    {
      name: 'Frigo',
      status: 'eteint'
    },
    {
      name: 'Fer à repasser',
      status: 'eteint'
    }
  ];

  isAuth = true;

  onAllumer() {
    console.log('On allume tout !');
  }
}
