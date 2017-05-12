import {
    Directive, ElementRef, Input, OnInit, Output, EventEmitter
} from '@angular/core';
import { DragNDropService } from "./dragndrop.service";
import {DragData, DragDataType} from "./dragdata";

@Directive({
    selector: '[dropzone]',
})
export class DropDirective implements OnInit {

    @Input('dropzone') name: string;
    @Input('dropOptions') dropOptions: { allowFiles?: boolean, allowMultiple?: boolean } = {};

    @Output() dropped: EventEmitter<DragData> = new EventEmitter();

    constructor(private el: ElementRef, private dragDropService: DragNDropService) {}

    ngOnInit() {
        let el = this.el.nativeElement;

        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', (e) => {
            if(!this.isItemDroppable(e)) return;
            el.classList.add('over');
            console.log(e)
        });

        // Remove the style
        el.addEventListener('dragleave', () => {
            el.classList.remove('over');
        });

        el.addEventListener('dragover', (e) => {
            if(!this.isItemDroppable(e)) return;
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
            if(!this.isItemDroppable(e)) return;
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }

            el.classList.remove('over');
            if(this.isFile(e)) {
                this.handleFileDrop(e);
            } else {
                this.dropped.emit(this.dragDropService.dragData);
            }
            this.dragDropService.endDrag();
            return false;
        })
    }

    isFile(e): boolean {
        return e.dataTransfer.files.length != 0
    }

    isItemDroppable(e): boolean {
        if(this.dropOptions.allowFiles == true && this.isFile(e)) {
            return true
        } else {
            return this.dragDropService.dragData != null && this.dragDropService.dragData.targets.indexOf(this.name) >= 0;
        }
    }

    private handleFileDrop(e: DragEvent) {
        if(this.dropOptions.allowMultiple) {
            for(let i = 0; i < e.dataTransfer.files.length; i++) {
                let file = e.dataTransfer.files.item(i);
                this.dropped.emit(new DragData(file, [], file.name, DragDataType.FILE));
            }
        } else {
            // only one file allowed
            let file = e.dataTransfer.files.item(0);
            this.dropped.emit(new DragData(file, [], file.name, DragDataType.FILE));
        }
    }
}