import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from "./drag.directive";
import { DropDirective } from "./drop.directive";
import { DropareaComponent } from "./droparea.component";

@NgModule({
    imports: [CommonModule],
    declarations: [DragDirective, DropDirective],
    exports: [DragDirective, DropDirective, DropareaComponent]
})
export class DragNDropModule {}