var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export function find(target) {
    if (target instanceof Element) {
        return target;
    }
    if (target instanceof Array) {
        return target[0] || undefined;
    }
    if (target instanceof NodeList) {
        return target[0] || undefined;
    }
    if (typeof target === 'string') {
        try {
            return document.querySelector(target) || undefined;
        }
        catch (error) {
            console.error(error);
        }
    }
    return undefined;
}
export function findAll(target) {
    if (target instanceof Element) {
        return [target];
    }
    if (target instanceof Array) {
        return target;
    }
    if (target instanceof NodeList) {
        return Array.prototype.slice.call(target);
    }
    if (typeof target === 'string') {
        try {
            return Array.prototype.slice.call(document.querySelectorAll(target));
        }
        catch (error) {
            console.error(error);
        }
    }
    return [];
}
export function matches(target, selector) {
    var matchesFunc = Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    return findAll(target).some(function (element) { return matchesFunc.call(element, selector); });
}
export function parents(target, selector) {
    var parentList = [];
    findAll(target).forEach(function (element) {
        var parent = element.parentNode;
        if (parent !== document && parent instanceof Element) {
            parentList.push(parent);
            parentList = parentList.concat(parents(parent));
        }
    });
    return parentList.filter(function (element) { return selector === undefined || matches(element, selector); });
}
export function liveBind(target, eventName, callback) {
    window.addEventListener(eventName, function (event) {
        var eventTarget = event.target;
        if (eventTarget instanceof HTMLElement) {
            var el = __spreadArrays([eventTarget], parents(eventTarget)).find(function (v) {
                return typeof target === 'string' ? matches(v, target) : target === v;
            });
            if (el instanceof HTMLElement) {
                callback(event, el);
            }
        }
    });
}
export function create(html) {
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    var firstChild = div.firstChild;
    if (firstChild) {
        div.removeChild(firstChild);
        return firstChild;
    }
    return undefined;
}
