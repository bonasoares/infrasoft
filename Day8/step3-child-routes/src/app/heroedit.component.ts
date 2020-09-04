import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template : `
    <h1>Hero Edit Component</h1>
    <h2>New Power is : {{ args }}</h2>
    <hr>
    <h3>New Intelligence : {{ int }}</h3>
    <h3>New Race : {{ rce }}</h3>
    `
})
export class HeroEditComponent{
    args = 0;
    int = 0;
    rce = "";
    constructor(private ar:ActivatedRoute ){};
    ngOnInit() {
      // this.args = this.ar.snapshot.params['args'];
      /*
      this.ar.params.subscribe( val => {
          this.args = val['args']
        })
      */

     /*
     this.int = this.ar.snapshot.params['intelligence'];
     this.rce = this.ar.snapshot.params['race'];
     */
     
      this.ar.params.subscribe( val => {
          this.int = val['intelligence'];
          this.rce = val['race'];
        })
    };
}