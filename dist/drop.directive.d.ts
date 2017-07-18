import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DragNDropService } from "./dragndrop.service";
import { DragData } from "./dragdata";
export declare class DropDirective implements OnInit {
    private el;
    private dragDropService;
    name: string;
    dropOptions: {
        allowFiles?: boolean;
        allowMultiple?: boolean;
    };
    dropped: EventEmitter<DragData>;
    constructor(el: ElementRef, dragDropService: DragNDropService);
    ngOnInit(): void;
    isFile(e: any): boolean;
    isItemDroppable(e: any): boolean;
    private handleFileDrop(e);
}
