import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { DragNDropService } from "./dragndrop.service";

@Directive({
    selector: '[draggableItem]',
})
export class DragDirective implements OnInit {

    @Input('draggableItem') model: any;
    @Input('target') target: string;

    constructor(private el: ElementRef, private dragDropService: DragNDropService) {
    }

    ngOnInit() {
        // Get the current element
        let el = this.el.nativeElement;

        // Set the draggable attribute to the element
        el.draggable = 'true';

        // Set up the dragstart event and add the drag-src CSS class
        // to change the visual appearance. Set the current todo as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', (e) => {
            console.log('Start');

            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.target);
            this.dragDropService.startDrag(el, this.model);
        });

        // Remove the drag-src class
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            el.classList.remove('drag-src')
        });
    }

}