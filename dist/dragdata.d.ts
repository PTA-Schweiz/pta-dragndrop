export declare enum DragDataType {
    UNKNOWN = 0,
    SNAPSHOT = 1,
    FILE = 2,
}
export declare class DragData {
    model?: any;
    source: string;
    targets: string[];
    type: DragDataType;
    displayName: string;
    previewSrc: string;
    constructor(model?: any, targets?: string[], displayName?: string, type?: DragDataType, source?: any, previewSrc?: string);
}
