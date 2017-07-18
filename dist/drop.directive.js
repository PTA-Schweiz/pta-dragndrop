"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dragndrop_service_1 = require("./dragndrop.service");
var dragdata_1 = require("./dragdata");
var DropDirective = (function () {
    function DropDirective(el, dragDropService) {
        this.el = el;
        this.dragDropService = dragDropService;
        this.dropOptions = {};
        this.dropped = new core_1.EventEmitter();
    }
    DropDirective.prototype.ngOnInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', function (e) {
            if (!_this.isItemDroppable(e))
                return;
            el.classList.add('over');
            console.log(e);
        });
        // Remove the style
        el.addEventListener('dragleave', function () {
            el.classList.remove('over');
        });
        el.addEventListener('dragover', function (e) {
            if (!_this.isItemDroppable(e))
                return;
            if (e.preventDefault) {
                e.preventDefault();
            }
            el.classList.add('over');
            e.dataTransfer.dropEffect = 'move';
            return false;
        });
        // On drop, get the data and convert it back to a JSON object
        // and fire off an event passing the data
        el.addEventListener('drop', function (e) {
            if (!_this.isItemDroppable(e))
                return;
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            el.classList.remove('over');
            if (_this.isFile(e)) {
                _this.handleFileDrop(e);
            }
            else {
                _this.dropped.emit(_this.dragDropService.dragData);
            }
            _this.dragDropService.endDrag();
            return false;
        });
    };
    DropDirective.prototype.isFile = function (e) {
        return e.dataTransfer.files.length != 0;
    };
    DropDirective.prototype.isItemDroppable = function (e) {
        if (this.dropOptions.allowFiles == true && this.isFile(e)) {
            return true;
        }
        else {
            return this.dragDropService.dragData != null && this.dragDropService.dragData.targets.indexOf(this.name) >= 0;
        }
    };
    DropDirective.prototype.handleFileDrop = function (e) {
        if (this.dropOptions.allowMultiple) {
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                var file = e.dataTransfer.files.item(i);
                this.dropped.emit(new dragdata_1.DragData(file, [], file.name, dragdata_1.DragDataType.FILE));
            }
        }
        else {
            // only one file allowed
            var file = e.dataTransfer.files.item(0);
            this.dropped.emit(new dragdata_1.DragData(file, [], file.name, dragdata_1.DragDataType.FILE));
        }
    };
    return DropDirective;
}());
DropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[dropzone]',
            },] },
];
/** @nocollapse */
DropDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: dragndrop_service_1.DragNDropService, },
]; };
DropDirective.propDecorators = {
    'name': [{ type: core_1.Input, args: ['dropzone',] },],
    'dropOptions': [{ type: core_1.Input, args: ['dropOptions',] },],
    'dropped': [{ type: core_1.Output },],
};
exports.DropDirective = DropDirective;
//# sourceMappingURL=drop.directive.js.map