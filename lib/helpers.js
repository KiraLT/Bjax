import { find } from './dom';
export function request(params, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', params.url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            success(request.responseText);
    };
}
export function loadLink(_a) {
    var url = _a.url, target = _a.target, source = _a.source, successCallback = _a.successCallback, errorCallback = _a.errorCallback, updateUrl = _a.updateUrl, loader = _a.loader;
    var targetElement = find(target || 'body');
    if (targetElement instanceof HTMLElement) {
        if (loader) {
            loader.start({
                target: targetElement
            });
        }
        request({ url: url }, function (content) {
            var html = document.createElement('html');
            html.innerHTML = content;
            var sourceElement = html.querySelector(source || 'body');
            var titleElement = html.querySelector('title');
            var title = titleElement ? titleElement.innerHTML : document.title;
            // if (sourceElement instanceof HTMLElement) {
            //     targetElement.innerHTML = sourceElement.innerHTML
            // }
            // if (updateUrl !== false) {
            //     try {
            //         history.pushState(null, title, url)
            //         document.title = title
            //     } catch (error) {
            //         console.warn(`Failed to update URL: ${error}`)
            //     }
            // }
            if (loader) {
                loader.finish({
                    target: targetElement
                });
            }
            if (successCallback) {
                successCallback();
            }
        }, function () {
            if (errorCallback) {
                if (loader) {
                    loader.error({
                        target: targetElement
                    });
                }
                errorCallback();
            }
        });
    }
}
