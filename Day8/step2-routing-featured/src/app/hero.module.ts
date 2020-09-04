import { NgModule } from "@angular/core";
import { HeroaddComponent } from "./heroadd.component";
import { HeroeditComponent } from "./heroedit.component";
import { HerolistComponent } from "./herolist.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component";

@NgModule({
    declarations:[HeroaddComponent, HeroeditComponent, HerolistComponent , HeroComponent ],
    imports:[RouterModule.forChild([
        { path : "hero" , component:HeroComponent },
        { path : "heroes" , component:HerolistComponent },
        { path : "addhero" , component:HeroaddComponent },
        { path : "edithero" , component:HeroeditComponent }
    ])],
    exports:[HeroComponent, HeroaddComponent, HeroeditComponent, HerolistComponent]
})
export class HeroModule{

}