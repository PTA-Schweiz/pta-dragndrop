import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DragData} from "./dragdata";

@Component({
    selector: 'droparea',
    styleUrls: ["./droparea.component.css"],
    templateUrl: "./droparea.component.html"
})
export class DropareaComponent {

    @Input() infotext: string;
    @Input() iconClassByType: Function;
    @Input() dropTarget: string;

    @Output() itemsChanged: EventEmitter<DragData[]> = new EventEmitter<DragData[]>();

    displayItems: DragData[] = [];

    constructor() {}

    clear() {
        this.displayItems.length = 0;
    }

    onDrop(event) {
        this.displayItems.push(event);
        this.itemsChanged.emit(this.displayItems);
    }

    remove(element) {
        this.displayItems.splice(this.displayItems.indexOf(element), 1);
        this.itemsChanged.emit(this.displayItems);
    }

}