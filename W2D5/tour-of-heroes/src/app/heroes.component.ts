import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service'
import { Hero } from './hero'

// export class Hero {
//   id: number
//   name: string
//   // constructor(
//   //   // declaration of constructor parameter and type
//   //   // declaration of public property of same name
//   //   // initializes property with corresponding argument on instantiation 
//   //   public id: number,
//   //   public name: string) {}
// }


@Component({
  selector: 'my-heroes',
  // inline HTML vs template 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
    // [(ngModel)] binds hero.name property to the textbox. Data flows in both directions: from property to the textbox and from the textbox back to the property. 
    // (click) event is the target, 'onSelect(hero)' calls the AppComponent method of 'onSelect()' with 'hero' as the argument
  //styleUrls: './heroes.component.css',
  //templateUrl: ['./app.component.html']
  //styleUrls: ['./app.component.css']
})

// Init properties using variable assignment
export class HeroesComponent implements OnInit{
  heroes: Hero[]
  selectedHero: Hero

  // dependency injection for better code
  constructor(
    private heroService: HeroService,
    private router: Router){}
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => 
    this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  add(name: string): void {
    name = name.trim()
    if(!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero)
        this.selectedHero = null
      })
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !==hero)
        if (this.selectedHero === hero) { this.selectedHero = null}
      })
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

