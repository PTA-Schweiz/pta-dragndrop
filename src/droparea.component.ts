import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DragData} from "./dragdata";

@Component({
    selector: 'droparea',
    styles: [`
.dropzone {
    min-height: 50px;
    border: 2px dashed #c0c0c0;
}

.dropzone .dropzone-info {
    font-family: "HelveticaNeue-Bold";
    text-align: center;
    color: #b7b7b7;
    line-height: 50px;
}

.dragndrop-item-text {
    margin: 10px 5px;
}

.dropzone ul {
    padding: 5px;
    margin: 0;
}

.dropzone.over {
    border-color: #a94442;
}

.dragndrop-dropped-item {
    list-style: none;
    width: 100%;
    border: 1px solid #666;
    margin-bottom: 10px;
}

li.dropzone-dropped-item:last-of-type {
    margin-bottom: 0;
}
`],
    template: `
    <div class="dropzone" [dropzone]="dropTarget" (dropped)="onDrop($event)">
    <p class="dropzone-info" *ngIf="displayItems.length == 0">{{ infotext }}</p>
    <ul>
        <li class="dragndrop-dropped-item" *ngFor="let el of displayItems">
            <p class="dragndrop-item-text"><img *ngIf="el.previewSrc" src="{{ el.previewSrc }}" height="50"> <i *ngIf="!el.previewSrc" class="icon" [ngClass]="iconClassByType(el.type)"></i> {{ el.displayName }} <i (click)="remove(el)" class="pull-right icon icon-bin"></i></p>
        </li>
    </ul>
</div>
`
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

    onDrop(event: any) {
        this.displayItems.push(event);
        this.itemsChanged.emit(this.displayItems);
    }

    remove(element: any) {
        this.displayItems.splice(this.displayItems.indexOf(element), 1);
        this.itemsChanged.emit(this.displayItems);
    }

}