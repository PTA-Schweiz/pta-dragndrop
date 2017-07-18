import { EventEmitter } from '@angular/core';
import { DragData } from "./dragdata";
export declare class DropareaComponent {
    infotext: string;
    iconClassByType: Function;
    dropTarget: string;
    itemsChanged: EventEmitter<DragData[]>;
    displayItems: DragData[];
    constructor();
    clear(): void;
    onDrop(event: any): void;
    remove(element: any): void;
}
