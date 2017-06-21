import { Component, OnInit } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from './hero.service'


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
    // define heroes array
    heroes: Hero[] = []

    // inject HeroService using constructor/private 
    constructor(private heroService: HeroService) {}

    // call service inside the OnInit lifecycle hook
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5))
    }

}