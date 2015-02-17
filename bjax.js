(function(window) {
    if (!('jQuery' in window)) {
        console.error('Bjax\'s JavaScript requires jQuery.');
        return;
    }
    var jQuery = window.jQuery;

    var isArray = function (element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    };

    var isDict = function (element) {
        return jQuery.isPlainObject(element);
    };

    var isEmpty = function (element) {
        if (isArray(element)) {
            return element.length === 0;
        } else {
            return !element;
        }
    };

    function Bjax (element, options) {
        if (options === undefined && isDict(element)) {
            options = element;
            element = undefined;
        }
        element = $(element);
        this.options = jQuery.extend({}, Bjax.defaults, options || {});
        this.data = {};
        if (element !== undefined) {
            this.loadElement(element);
        }
        this.loadData();
        this.loader = new Bjax.Loader($(this.data['target']));
        this.execute();
    };

    Bjax.VERSION = '1.0.0';
    Bjax.defaults = {
        'url_attribute': [
            'data-href',
            'href'
        ],
        'replace_attribute': 'data-replace',
        'replace': true,
        'element_attribute': 'data-el',
        'element': 'html',
        'target_attribute': 'data-target',
        'target': 'html'
    };

    Bjax.prototype.loadElement = function (element) {
        var data = {
            url: this.getValueByAttr(element, this.options.url_attribute),
            element: this.getValueByAttr(element, this.options.element_attribute),
            target: this.getValueByAttr(element, this.options.target_attribute),
            replace: this.getValueByAttr(element, this.options.replace_attribute),
        };
        for (var key in data) {
            if (!isEmpty(data[key])) {
                this.data[key] = data[key];
            }
        }
    };

    Bjax.prototype.loadData = function (element) {
        var data = {
            url: this.options.url,
            element: this.options.element,
            target: this.options.target,
            replace: this.options.replace,
        };
        for (var key in data) {
            if (!isEmpty(data[key]) && !(key in this.data)) {
                this.data[key] = data[key];
            }
        }
    };

    Bjax.prototype.getValueByAttr = function (element, attributes) {
        if (!isArray(attributes)) {
            attributes = [attributes];
        }
        for (var i=0; i<attributes.length; i++) {
            var attr = element.attr(attributes[i]);
            if (typeof attr !== typeof undefined && attr !== false) {
                return attr;
            }
        }
        return undefined;
    };

    Bjax.prototype.execute = function () {
        var self = this;
        self.loader.update(100, 500);
        jQuery.ajax({
            type: 'GET',
            url: this.data['url'],
            success: function(content) {
                self.loader.update(100, 300, function() {
                    self.render(content);
                    self.updateUrl();
                });
            },
            error: function() {
                self.loader.error(2000, function() {
                    self.execute();
                });
            }
        });
    };

    Bjax.prototype.updateUrl = function () {
        if (this.data['replace'] === true){
            try {
                window.history.pushState({}, '', this.data['url']);
            } catch(e) {
                window.location.replace(this.data['url']);
            }
        }
    };

    Bjax.prototype.render = function (content) {
        if(this.data['element'] !== 'html') {
            content = $(content).find(this.data['element']).html();
        }
        if(this.data['target'] !== 'html') {
            $(this.data['target']).html(content);
        } else {
            document.open();
            document.write(content);
            document.close();
        }
        document.title = $(content).filter('title').text();
    };

    Bjax.PercentLoader = function (target) {
        this.target = target;
        this.backdrop = $('<div class="bjax-backdrop"></div>');
        this.bar = $('<div class="bjax-bar"></div>');
        this.err = $('<div class="bjax-backdrop-error"></div>');
        this.abort = false;
        this.init();
    };

    Bjax.PercentLoader.prototype.init = function (){
        var self = this;
        this.target.css('position','relative')
        this.backdrop.appendTo(this.target);
        this.bar.width(0)
        this.bar.appendTo(this.backdrop);
        this.err.appendTo(this.backdrop);
        $(document).on('click', '.bjax-backdrop', function() {
            $(this).remove();
            self.abort = true;
            $(document).off('click', '.bjax-backdrop');
        });
    };

    Bjax.PercentLoader.prototype.update = function (progress, waittime, callback){
        this.bar.stop().animate({
            width: progress + '%'
        }, waittime, 'linear', function() {
            if (callback !== undefined) {
                callback();
            }
        });
    };

    Bjax.PercentLoader.prototype.error = function (waittime, callback){
        var self = this;
        this.bar.stop();
        this.bar.width(0);
        this.bar.addClass('bjax-bar-error');
        this.err.text('Error occurred, retrying. Click anywhere to exit.');
        this.bar.animate({
            width: '100%'
        }, waittime, 'linear', function() {
            self.bar.width(0);
            self.bar.removeClass('bjax-bar-error');
            if (callback !== undefined && self.abort === false) {
                callback();
            }
        });
    };

    Bjax.Loader = Bjax.PercentLoader;

    jQuery.fn.bjax = function (options) {
        $(document).on('click', this.selector, function (e) {
            new Bjax(this, options);
            e.preventDefault();
        });
        return this;
    };

    window.Bjax = Bjax;
})(window);
