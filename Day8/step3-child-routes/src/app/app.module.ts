import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroServices } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero.component';
import { HeroEditComponent } from './heroedit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, HeroesComponent,HeroComponent, HeroEditComponent ],
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: "", component:HeroesComponent },
    { path: "hero/:id", component:HeroComponent, 
      children:[
        { path : "edit/:args", component:HeroEditComponent},
        { path : "edit", component:HeroEditComponent},
      ] }
  ]) ],
  providers: [HeroServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
