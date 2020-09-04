import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShowHeroes } from './showheroes.component';
import { HeroServices } from './hero.service';
import { HeroPipe } from './herofilter.pipe';
import { ShowHero } from './showhero.component';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [AppComponent, ShowHeroes, ShowHero, HeroPipe ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {path:"", component:ShowHeroes},
    {path:"hero", component:ShowHero}
  ])],
  providers: [HeroServices], 
  bootstrap: [AppComponent]
})
export class AppModule { }
