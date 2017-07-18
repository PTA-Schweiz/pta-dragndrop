"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DragDataType;
(function (DragDataType) {
    DragDataType[DragDataType["UNKNOWN"] = 0] = "UNKNOWN";
    DragDataType[DragDataType["SNAPSHOT"] = 1] = "SNAPSHOT";
    DragDataType[DragDataType["FILE"] = 2] = "FILE";
})(DragDataType = exports.DragDataType || (exports.DragDataType = {}));
var DragData = (function () {
    function DragData(model, targets, displayName, type, source, previewSrc) {
        this.model = model;
        this.targets = targets;
        this.displayName = displayName;
        this.type = type != null ? type : DragDataType.UNKNOWN;
        this.source = source;
        this.previewSrc = previewSrc;
    }
    return DragData;
}());
exports.DragData = DragData;
//# sourceMappingURL=dragdata.js.map