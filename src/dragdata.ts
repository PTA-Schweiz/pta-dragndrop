export enum DragDataType {
    UNKNOWN,
    SNAPSHOT,
    FILE
}

export class DragData {
    model?: any;
    source: string;
    targets: string[];
    type: DragDataType;
    displayName: string;
    previewSrc: string;

    constructor( model?: any, targets?: string[], displayName?: string, type?: DragDataType, source?: any, previewSrc?: string) {
        this.model = model;
        this.targets = targets;
        this.displayName = displayName;
        this.type = type != null ? type : DragDataType.UNKNOWN;
        this.source = source;
        this.previewSrc = previewSrc;
    }
}