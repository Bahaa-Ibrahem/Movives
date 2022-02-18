import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    imports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule
    ],
    exports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }