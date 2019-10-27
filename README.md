# Welcome to Bjax 2.0

Ajax link system for modern website. Convert any link in your page to ajax link.

**New V2 version on pure VanilaJS, lightweight and super fast!**

## Usage

### Binding links

You can convert all links to Bjax links using `bindLinks` with `a` selector.

```js
bindLinks('a')
```

Or you can bind on data-bjax selector.

```js
bindLinks('[data-bjax]')
```

### Loading part of a page

You can specify `source` and `target` using data attributes: 

```html
<a href="/" data-bjax data-source="#source" data-target="#target">My link</a>
```

Or you can specify that information when binding:

```js
bindLinks('data-bjax', {
    source: '#source',
    target: '#target'
})
```

Also, you can use `data-selector` attribute or `selector` parameter to specify both `target` & `source` with one parameter.

### Manually loading

You can load link manually using `loadLink` function.

```js
loadLink('https://my.page/second-page', {
    target: '#part'
})
```

This will download whole page and insert it into element with `part` ID.

### Bind manually

Using `liveBind` and `loadLink` you can customize bindings as much as you wish.

```js
liveBind('[data-bjax]', 'click', function(event, element) {
    event.preventDefault()
    if (element instanceof HTMLAnchorElement) {
        loadLink(element.href, {
            selector: '#container'
        })
    }
})
```

## Funtions

If you are using browser build, all these funtions are accessable using `window.Bjax` object.

### loadLink(url, [options])

Downloads page from `url` and update current page acording downloaded. 

```js
loadLink('https://my.page/second-page')
```

*Options:*

* **target** - DOM selector where should be inserted downloaded page HTML (default is `body`).
* **source** - DOM selected which indicates which part from downloaded page should be extracted (default is `body`).
* **shouldUpdateUrl** - indicates if the url should be updated using `url` parameter using `pushState` (default is `true`).
* **loader** - custom loader instance (default is empty loader - `{}`).
* **successCallback** - callback which is called if the function finished the work without an error.
* **errorCallback** - Callback which is called if the function had an error and failed to finish.

### bindLinks(selector, [options])

Binds `loadLink` funtion on given `selector` using `liveBind`.

```js
bindLinks('a[data-bjax]')
```

**Supports all `loadLink` options.**

*Additional options:*

* **url** - target page URL, default is `undefined` and `urlAttribute` parameter is used.
* **urlAttribute** - `url` parameter value, which is taken from clicked element (default is `href`).
* **targetAttribute** - `target` parameter value, which is taken from clicked element (default is `data-target`).
* **sourceAttribute** - `source` parameter value, which is taken from clicked element (default is `data-source`).

### liveBind(target, eventName, callback)

Listens `eventName` events on `window` object. Because it binds on `window` object, you can change inner DOM and it won't effect this bind at all.
