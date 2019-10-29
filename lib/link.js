var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { find, liveBind } from './dom';
import { request } from './helpers';
var defaultLoadLinkOptions = {
    target: 'body',
    source: 'body',
    successCallback: function () { },
    errorCallback: function () { },
    shouldUpdateUrl: true,
    loader: {},
    selector: ''
};
var stateBinded = false;
export function loadLink(url, options) {
    var _a = __assign(__assign({}, defaultLoadLinkOptions), options), target = _a.target, source = _a.source, selector = _a.selector, successCallback = _a.successCallback, errorCallback = _a.errorCallback, shouldUpdateUrl = _a.shouldUpdateUrl, loader = _a.loader;
    var targetElement = find(selector ? selector : target);
    if (targetElement instanceof HTMLElement) {
        if (!stateBinded) {
            bindPopState();
            stateBinded = true;
        }
        var loaderState_1 = loader.start ? loader.start({
            target: targetElement
        }) : undefined;
        request({ url: url }, function (content) {
            var html = document.createElement('html');
            html.innerHTML = content;
            var sourceElement = html.querySelector(selector ? selector : source);
            if (sourceElement instanceof HTMLElement) {
                targetElement.innerHTML = sourceElement.innerHTML;
            }
            var titleElement = html.querySelector('title');
            document.title = titleElement ? titleElement.innerHTML : document.title;
            if (shouldUpdateUrl) {
                try {
                    history.pushState({
                        bjaxLink: {
                            url: url,
                            loader: loader
                        },
                    }, document.title, url);
                }
                catch (error) {
                    console.warn("Failed to update URL: " + error);
                }
            }
            if (loader.finish) {
                loader.finish({
                    target: targetElement
                }, loaderState_1);
            }
            successCallback({
                target: targetElement
            });
        }, function (error) {
            if (loader.error) {
                loader.error({
                    error: error,
                    target: targetElement,
                }, loaderState_1);
            }
            errorCallback({
                error: error,
                target: targetElement
            });
        });
    }
    else {
        console.error('loadLink target not found');
    }
}
function bindPopState() {
    window.addEventListener('popstate', function (event) {
        var data = event.state;
        console.log(data);
        if (data.bjaxLink) {
            loadLink(data.bjaxLink.url, {
                shouldUpdateUrl: false,
                loader: data.bjaxLink.loader
            });
        }
    }, false);
    history.replaceState({
        bjaxLink: {
            url: location.href,
            loader: defaultLoadLinkOptions.loader
        }
    }, '');
}
var defaultBindLinksOptions = __assign(__assign({}, defaultLoadLinkOptions), { url: '', urlAttribute: 'href', target: '', targetAttribute: 'data-target', source: '', sourceAttribute: 'data-source', selector: '', selectorAttribute: 'data-selector' });
export function bindLinks(selector, options) {
    var _a = __assign(__assign({}, defaultBindLinksOptions), options), url = _a.url, urlAttribute = _a.urlAttribute, source = _a.source, sourceAttribute = _a.sourceAttribute, target = _a.target, targetAttribute = _a.targetAttribute, selector2 = _a.selector, selectorAttribute = _a.selectorAttribute, kwargs = __rest(_a, ["url", "urlAttribute", "source", "sourceAttribute", "target", "targetAttribute", "selector", "selectorAttribute"]);
    liveBind(selector, 'click', function (event, element) {
        var finalUrl = url || (urlAttribute === 'href' && element instanceof HTMLAnchorElement ? element.href : element.getAttribute(urlAttribute));
        var finalSource = source || element.getAttribute(sourceAttribute);
        var finalTarget = target || element.getAttribute(targetAttribute);
        var finalSelector = selector2 || element.getAttribute(selectorAttribute);
        if (finalUrl) {
            loadLink(finalUrl, __assign(__assign(__assign(__assign({}, (finalSource ? { source: finalSource } : undefined)), (finalTarget ? { target: finalTarget } : undefined)), (finalSelector ? { selector: finalSelector } : undefined)), kwargs));
            event.preventDefault();
        }
        else {
            console.error('Clicked element does not have valid URL');
        }
    });
}
