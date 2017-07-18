"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropareaComponent = (function () {
    function DropareaComponent() {
        this.itemsChanged = new core_1.EventEmitter();
        this.displayItems = [];
    }
    DropareaComponent.prototype.clear = function () {
        this.displayItems.length = 0;
    };
    DropareaComponent.prototype.onDrop = function (event) {
        this.displayItems.push(event);
        this.itemsChanged.emit(this.displayItems);
    };
    DropareaComponent.prototype.remove = function (element) {
        this.displayItems.splice(this.displayItems.indexOf(element), 1);
        this.itemsChanged.emit(this.displayItems);
    };
    return DropareaComponent;
}());
DropareaComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'droparea',
                styles: ["\n.dropzone {\n    min-height: 50px;\n    border: 2px dashed #c0c0c0;\n}\n\n.dropzone .dropzone-info {\n    font-family: \"HelveticaNeue-Bold\";\n    text-align: center;\n    color: #b7b7b7;\n    line-height: 50px;\n}\n\n.dragndrop-item-text {\n    margin: 10px 5px;\n}\n\n.dropzone ul {\n    padding: 5px;\n    margin: 0;\n}\n\n.dropzone.over {\n    border-color: #a94442;\n}\n\n.dragndrop-dropped-item {\n    list-style: none;\n    width: 100%;\n    border: 1px solid #666;\n    margin-bottom: 10px;\n}\n\nli.dropzone-dropped-item:last-of-type {\n    margin-bottom: 0;\n}\n"],
                template: "\n    <div class=\"dropzone\" [dropzone]=\"dropTarget\" (dropped)=\"onDrop($event)\">\n    <p class=\"dropzone-info\" *ngIf=\"displayItems.length == 0\">{{ infotext }}</p>\n    <ul>\n        <li class=\"dragndrop-dropped-item\" *ngFor=\"let el of displayItems\">\n            <p class=\"dragndrop-item-text\"><img *ngIf=\"el.previewSrc\" src=\"{{ el.previewSrc }}\" height=\"50\"> <i *ngIf=\"!el.previewSrc\" class=\"icon\" [ngClass]=\"iconClassByType(el.type)\"></i> {{ el.displayName }} <i (click)=\"remove(el)\" class=\"pull-right icon icon-bin\"></i></p>\n        </li>\n    </ul>\n</div>\n"
            },] },
];
/** @nocollapse */
DropareaComponent.ctorParameters = function () { return []; };
DropareaComponent.propDecorators = {
    'infotext': [{ type: core_1.Input },],
    'iconClassByType': [{ type: core_1.Input },],
    'dropTarget': [{ type: core_1.Input },],
    'itemsChanged': [{ type: core_1.Output },],
};
exports.DropareaComponent = DropareaComponent;
//# sourceMappingURL=droparea.component.js.map