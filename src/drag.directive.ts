import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { DragNDropService } from "./dragndrop.service";
import {DragDataType} from "./dragdata";

@Directive({
    selector: '[draggableItem]',
})
export class DragDirective implements OnInit {

    @Input('dragModel') dragModel: any;
    @Input('dragTargets') dragTargets: string[];
    @Input('dragName') dragName: string;
    @Input('dragType') dragType: DragDataType;

    constructor(private el: ElementRef, private dragDropService: DragNDropService) {
    }

    ngOnInit() {
        // Get the current element
        let el = this.el.nativeElement;

        // Set the draggable attribute to the element
        el.draggable = 'true';

        // Set up the dragstart event and add the drag-src CSS class
        el.addEventListener('dragstart', (e: any) => {
            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData(el, this.dragName, '');

            // let clone = e.target.cloneNode(true);
            // e.target.parentNode.appendChild(clone);
            // e.target.ghostDragger = clone;

            this.dragDropService.startDrag(this.dragModel, this.dragTargets, this.dragName, this.dragType, el);
            return true;
        });

        // Remove the drag-src class
        el.addEventListener('dragend', (e: any) => {
            e.preventDefault();
            el.classList.remove('drag-src');
            // let clone = e.target.ghostDragger;
            // clone.parentNode.removeChild(clone);
            this.dragDropService.endDrag();
        });
    }

}