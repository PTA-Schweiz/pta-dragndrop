import { Injectable } from "@angular/core";
import { DragData, DragDataType } from "./dragdata";

@Injectable()
export class DragNDropService {

    dragData: DragData;

    isDragging: boolean;

    startDrag(model: any, targets: string[], displayName: string, type: DragDataType, source: any) {
        this.dragData = new DragData(model, targets, displayName, type, source);
        this.isDragging = true;
    }

    endDrag() {
        this.isDragging = false;
        this.dragData = null;
    }
}