import { NgModule } from "@angular/core";
import { ReplacePipe } from "./repleace.pipe";


@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]

})
export class AppPipeModule { 

}