"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var drag_directive_1 = require("./drag.directive");
var drop_directive_1 = require("./drop.directive");
var droparea_component_1 = require("./droparea.component");
var DragNDropModule = (function () {
    function DragNDropModule() {
    }
    return DragNDropModule;
}());
DragNDropModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                exports: [drag_directive_1.DragDirective, drop_directive_1.DropDirective, droparea_component_1.DropareaComponent]
            },] },
];
/** @nocollapse */
DragNDropModule.ctorParameters = function () { return []; };
exports.DragNDropModule = DragNDropModule;
//# sourceMappingURL=dragndrop.module.js.map