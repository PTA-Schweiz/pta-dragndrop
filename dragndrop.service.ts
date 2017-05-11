import {Injectable, ElementRef} from "@angular/core";

@Injectable()
export class DragNDropService {
    dragTargets: any[];

    dragItem: any;
    dragModel: any;

    startDrag(el: ElementRef, model?: any) {
        this.dragItem = el;
        this.dragModel = model;

        console.debug('Start dragging');
        console.debug(model);
    }

    endDrag() {
        this.dragItem = null;
        this.dragModel = null;
    }
}