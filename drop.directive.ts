import {
    Directive, ElementRef, Input, OnInit, Output, EventEmitter
} from '@angular/core';
import { DragNDropService } from "./dragndrop.service";

@Directive({
    selector: '[dropzone]',
})
export class DropDirective implements OnInit {

    @Input('dropzone') name: string;

    @Output() dropped: EventEmitter<any> = new EventEmitter();

    constructor(private el: ElementRef, private dragDropService: DragNDropService) {}

    ngOnInit() {
        let el = this.el.nativeElement;

        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', (e) => {
            if(!this.isItemDroppable()) return;
            el.classList.add('over');
            console.log(e)
        });

        // Remove the style
        el.addEventListener('dragleave', () => {
            el.classList.remove('over');
        });

        el.addEventListener('dragover', (e) => {
            if(!this.isItemDroppable()) return;
            if (e.preventDefault) {
                e.preventDefault();
            }

            el.classList.add('over');
            e.dataTransfer.dropEffect = 'move';
            return false;
        });

        // On drop, get the data and convert it back to a JSON object
        // and fire off an event passing the data
        el.addEventListener('drop', (e) => {
            if(!this.isItemDroppable()) return;
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }

            el.classList.remove('over');
            let droplet = { model: this.dragDropService.dragModel, el: this.dragDropService.dragItem};
            this.dropped.emit(droplet);
            this.dragDropService.endDrag();
            return false;
        })
    }

    isItemDroppable(): boolean {
        return this.dragDropService.dragItem != null;
    }

}