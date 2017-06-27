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

    constructor( model?: any, targets?: string[], displayName?: string, type?: DragDataType, source?: any) {
        this.model = model;
        this.targets = targets;
        this.displayName = displayName;
        this.type = type != null ? type : DragDataType.UNKNOWN;
        this.source = source;
    }
}