"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addHeadCount(count) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.name = new targetClass().name;
                this.headcount = count.hc;
            }
            return class_1;
        }());
    };
}
;
var Company = /** @class */ (function () {
    function Company() {
        this.name = "Infrasoft";
    }
    Company = __decorate([
        addHeadCount({
            hc: 6000
        })
    ], Company);
    return Company;
}());
;
var comp = new Company();
console.log(comp.name, comp.headcount);
