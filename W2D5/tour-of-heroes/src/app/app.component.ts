import { Component } from '@angular/core';

export class Hero {
  id: number
  name: string
  // constructor(
  //   // declaration of constructor parameter and type
  //   // declaration of public property of same name
  //   // initializes property with corresponding argument on instantiation 
  //   public id: number,
  //   public name: string) {}
}

  const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice'},
    { id: 12, name: 'Narco'},
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
    ]


@Component({
  selector: 'app-root',
  // inline HTML vs template 
  template: `
  <h1>{{title}}</h1>

  <p>Heroes:</p>
  <ul class = "heroes">
    <li *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)" >
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
    // [(ngModel)] binds hero.name property to the textbox. Data flows in both directions: from property to the textbox and from the textbox back to the property. 
    // (click) event is the target, 'onSelect(hero)' calls the AppComponent method of 'onSelect()' with 'hero' as the argument

  styles: [`
      .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]


  //templateUrl: ['./app.component.html']
  //styleUrls: ['./app.component.css']
})

// Init properties using variable assignment
export class AppComponent {
  title = 'Tour of Heroes'
  heroes = HEROES

  myHero = this.heroes[0]

  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}

// Init properties using a constructor
// export class AppComponent {
//   title: string
//   myHero: string

//   constructor() {
//     this.title = 'Tour of Heroes'
//     this.myHero = 'Windstorm'
//   }
// }

// *ngFor is a microsyntax, a small language that Angular interprets
// "let hero of heroes" means:
// Take each hero in the heroes array, store it in the local hero looping variable, and make it available to the templated HTML for each iteration

