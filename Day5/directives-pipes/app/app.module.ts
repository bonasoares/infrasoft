import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenPipe } from './gen.pipe';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { HeroService } from './herodata.service';

@NgModule({
  declarations: [
    AppComponent, GenPipe, GridComponent, HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
