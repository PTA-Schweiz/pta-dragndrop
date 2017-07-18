import { DragData, DragDataType } from "./dragdata";
export declare class DragNDropService {
    dragData: DragData;
    isDragging: boolean;
    startDrag(model: any, targets: string[], displayName: string, type: DragDataType, source: any, previewSrc: string): void;
    endDrag(): void;
}
