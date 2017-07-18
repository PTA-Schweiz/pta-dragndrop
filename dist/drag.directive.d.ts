import { ElementRef, OnInit } from '@angular/core';
import { DragNDropService } from "./dragndrop.service";
import { DragDataType } from "./dragdata";
export declare class DragDirective implements OnInit {
    private el;
    private dragDropService;
    dragModel: any;
    dragTargets: string[];
    dragName: string;
    dragType: DragDataType;
    previewSrc: string;
    constructor(el: ElementRef, dragDropService: DragNDropService);
    ngOnInit(): void;
}
