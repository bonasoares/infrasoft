import { NgModule } from "@angular/core";
import { MovieaddComponent } from "./movieadd.component";
import { MovieeditComponent } from "./movieedit.component";
import { MovielistComponent } from "./movielist.component";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./movie.component";

@NgModule({
    declarations:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent],
    imports:[RouterModule.forChild([
        { path : "movie" , component:MovieComponent },
        { path : "movies" , component:MovielistComponent },
        { path : "addmovie" , component:MovieaddComponent },
        { path : "editmovie" , component:MovieeditComponent },
    ])],
    exports:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent]
})
export class MovieModule{

}