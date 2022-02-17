import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    imports: [
        MatSliderModule,
        MatSelectModule
    ],
    exports: [
        MatSliderModule,
        MatSelectModule
    ]
})
export class MaterialModule { }