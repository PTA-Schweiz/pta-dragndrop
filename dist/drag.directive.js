"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dragndrop_service_1 = require("./dragndrop.service");
var DragDirective = (function () {
    function DragDirective(el, dragDropService) {
        this.el = el;
        this.dragDropService = dragDropService;
    }
    DragDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Get the current element
        var el = this.el.nativeElement;
        // Set the draggable attribute to the element
        el.draggable = 'true';
        // Set up the dragstart event and add the drag-src CSS class
        el.addEventListener('dragstart', function (e) {
            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData(el, _this.dragName, '');
            // let clone = e.target.cloneNode(true);
            // e.target.parentNode.appendChild(clone);
            // e.target.ghostDragger = clone;
            _this.dragDropService.startDrag(_this.dragModel, _this.dragTargets, _this.dragName, _this.dragType, el, _this.previewSrc);
            return true;
        });
        // Remove the drag-src class
        el.addEventListener('dragend', function (e) {
            e.preventDefault();
            el.classList.remove('drag-src');
            // let clone = e.target.ghostDragger;
            // clone.parentNode.removeChild(clone);
            _this.dragDropService.endDrag();
        });
    };
    return DragDirective;
}());
DragDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[draggableItem]',
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: dragndrop_service_1.DragNDropService, },
]; };
DragDirective.propDecorators = {
    'dragModel': [{ type: core_1.Input, args: ['dragModel',] },],
    'dragTargets': [{ type: core_1.Input, args: ['dragTargets',] },],
    'dragName': [{ type: core_1.Input, args: ['dragName',] },],
    'dragType': [{ type: core_1.Input, args: ['dragType',] },],
    'previewSrc': [{ type: core_1.Input, args: ['previewSrc',] },],
};
exports.DragDirective = DragDirective;
//# sourceMappingURL=drag.directive.js.map