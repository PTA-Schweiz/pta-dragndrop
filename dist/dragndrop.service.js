"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dragdata_1 = require("./dragdata");
var DragNDropService = (function () {
    function DragNDropService() {
    }
    DragNDropService.prototype.startDrag = function (model, targets, displayName, type, source, previewSrc) {
        this.dragData = new dragdata_1.DragData(model, targets, displayName, type, source, previewSrc);
        this.isDragging = true;
    };
    DragNDropService.prototype.endDrag = function () {
        this.isDragging = false;
        this.dragData = null;
    };
    return DragNDropService;
}());
DragNDropService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DragNDropService.ctorParameters = function () { return []; };
exports.DragNDropService = DragNDropService;
//# sourceMappingURL=dragndrop.service.js.map