import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './model/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id : 11, name : 'Ironman' },
      { id : 12, name : 'Thor' },
      { id : 13, name : 'Black Panther' },
      { id : 14, name : 'Antman' },
      { id : 15, name : 'Black Widow' },
      { id : 16, name : 'Scarlet Witch' },
      { id : 17, name : 'Hulk' },
      { id : 18, name : 'Captain Marvel' },
      { id : 19, name : 'Doctor Strange' },
      { id : 20, name : 'Vision' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}