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
export function request(params, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', params.url, true);
    try {
        request.send(null);
    }
    catch (error) {
        console.log(error);
    }
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                success(request.responseText);
            }
            else {
                error(new RequestError(request.statusText, request.status));
            }
        }
    };
}
var RequestError = /** @class */ (function (_super) {
    __extends(RequestError, _super);
    function RequestError(error, status) {
        var _this = _super.call(this, error) || this;
        _this.status = status;
        return _this;
    }
    return RequestError;
}(Error));
export { RequestError };
