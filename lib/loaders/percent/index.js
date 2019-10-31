import { findOrCreate } from '../../dom';
function createPercentAnimation(callback, finish, duration) {
    var start = Date.now();
    var interval = setInterval(function () {
        var now = Date.now();
        if (now - start >= duration) {
            callback(100);
            clearInterval(interval);
        }
        else {
            callback(Math.min(Math.round((now - start) / duration * 100), 100));
        }
    }, Math.max(30, Math.round(duration / 100)));
    return interval;
}
var PercentLoader = /** @class */ (function () {
    function PercentLoader() {
    }
    PercentLoader.prototype.start = function (_a) {
        var target = _a.target;
        var mainEl = findOrCreate(target.querySelector('.bjax-percentloader-container'), "\n            <div class=\"bjax-percentloader-container\"></div>\n        ");
        var barEl = findOrCreate(target.querySelector('.bjax-percentloader-bar'), "\n            <div class=\"bjax-percentloader-bar\"></div>\n        ");
        var errorEl = findOrCreate(target.querySelector('.bjax-percentloader-error'), "\n            <div class=\"bjax-percentloader-error\"></div>\n        ");
        mainEl.appendChild(barEl);
        mainEl.appendChild(errorEl);
        target.style.position = 'relative';
        target.appendChild(mainEl);
        return {
            mainEl: mainEl,
            barEl: barEl,
            errorEl: errorEl,
            interval: createPercentAnimation(function (progress) {
                barEl.style.width = progress + "%";
            }, function () {
            }, 500)
        };
    };
    PercentLoader.prototype.finish = function (_a, _b) {
        var target = _a.target;
        var interval = _b.interval;
        clearInterval(interval);
        target.style.position = '';
    };
    PercentLoader.prototype.error = function (_a, _b) {
        var target = _a.target, error = _a.error;
        var interval = _b.interval, barEl = _b.barEl, errorEl = _b.errorEl;
        barEl.className = 'bjax-percentloader-bar bjax-percentloader-bar-error';
        errorEl.innerHTML = error.message;
    };
    return PercentLoader;
}());
export { PercentLoader };
