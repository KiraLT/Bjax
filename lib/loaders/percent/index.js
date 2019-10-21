var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Loader } from '../';
import { create } from '../../dom';
require('./styles');
var PercentLoader = /** @class */ (function (_super) {
    __extends(PercentLoader, _super);
    function PercentLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentLoader.prototype.start = function (_a) {
        var target = _a.target;
        var element = (function () {
            var el = target.querySelector('#bjax-loader');
            if (el instanceof HTMLElement) {
                return el;
            }
            var newEl = create("\n                <div class=\"bjax-backdrop\" id=\"bjax-loader\">\n                    <div class=\"bjax-bar\"></div>\n                    <div class=\"bjax-backdrop-error\"></div>\n                </div>\n            ");
            target.appendChild(newEl);
            return newEl;
        })();
        element.style.width = '0px';
        target.style.position = 'relative';
    };
    PercentLoader.prototype.finish = function () {
    };
    PercentLoader.prototype.error = function () {
    };
    return PercentLoader;
}(Loader));
export { PercentLoader };
