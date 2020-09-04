import { Component, OnInit } from '@angular/core';
import { HeroServices } from './hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:`
    <a [routerLink]="['']" queryParamsHandling="preserve">Back to List</a> 
    <h2> Show Details </h2>
    <h3>{{ selhero }}{{ heroes[selhero-1].name }}</h3>
    <img width="100" src="{{ heroes[selhero-1].image.url }}" alt="{{ heroes[selhero-1].name }}">
    <hr>
    <h2>
    Query parameters
    <br>
    selected hero : {{ selhero }}
    <br>
    filter data : {{ filterherodata }}
    </h2>
    `
  })
  /*
   <a [routerLink]="['edit']" 
       [queryParams]="{param : params,  intelligence : intel, race : race}"
       >Edit with Query Parameters</a>

  can be done using router.navigate as follows
  this.router.navigate(['edit'],{
    [queryParams]="{param : params,  intelligence : intel, race : race}"
  })
  */
  export class ShowHero implements OnInit{
    selhero = 0;
    filterherodata = '';
    heroes = []; 
    constructor(private hd:HeroServices, private ar:ActivatedRoute ){};
    ngOnInit() {

      this.selhero = this.ar.snapshot.queryParams['hid'];
      /*
      this.ar.queryParams.subscribe( req => {
        this.selhero = req["hid"];
      })
      */
      this.filterherodata = this.ar.snapshot.queryParams['filterdata'];
      this.heroes = this.hd.getData().heroes; 
    }; 
  } 