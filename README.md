# Welcome to Bjax 1.0.2

Ajax link system for modern website. Convert any link in your page to ajax link.

Demo online: http://bjax.6te.net/demo/

## Features

* Converts any link to ajax link.
* Loads whole page with ajax.
* Loads part of page with ajax.

## Requirements

* jQuery.
* HTML5 browser.

## Usage

### Download manually

Download the latest version: https://github.com/KiraLT/Bjax/releases

### Download using Bower

```
bower install bjax
```

Link to the JS file:

```html
<script src="bjax.min.js" type="text/javascript"></script>
```

Add the CSS file (or append contents to your own stylesheet):

```html
<link href="bjax.min.css" rel="stylesheet" type="text/css" />
```

To initialize:

```javascript
// bind on data-bjax attributes (recommended)
$('[data-bjax]').bjax();

// bind on each link
$('a').bjax();

// or with custom settings
$('[data-bjax]').bjax({
    target: '#content',
    element: '#content'
});
```

## Settings

Key | Default | Values | Description
--- | --- | --- | ---
url_attribute | data-href or href | String | URL attribute 
url | undefined | String | custom url
replace_attribute | data-replace | String | Replace attribute
replace | true | Boolean | Change page URL after bjax load
element_attribute | data-el | String | Element attribute
element | html | String | Element to load
target_attribute | data-target | String | Target attribute
target | html | String | Load target

## HTML attributes

`data-target`- jQuery selector

Load content to specified target.

**Example HTML:**

```html
<div id="content">
  <a href="content.html" data-target="#content" data-bjax>Load here</a>
</div>
```

`data-el`- jQuery selector

Load only specified element.

**Example HTML:**

```html
<a href="content.html" data-el="#content" data-bjax>Load here</a>
```

`data-replace`- boolean

Change URL after load dynamicaly.

**Example HTML:**

```html
<a href="home.html" data-replace="false" data-bjax>Home</a>
```

`data-url`- string

Custom load URL. Will be used instead of href attribute.

**Example HTML:**

```html
<button data-url="home.html"  data-bjax>Home</button>
```

## API `Bjax`

You can instantiate the Bjax also through a classic way:

```javascript
// Collect settings from element
new Bjax($('[data-bjax']));

// Set settings manually
new Bjax({
  'target': '#target',
  'element': '#element',
  'url': '/page'
});

// Mixed
new Bjax($('[data-bjax']), {
  'target': '#target',
  'element': '#element'
});
```

Bind bjax manually:

```javascript
$('[data-bjax]').on('click', function(e){
    new Bjax(this);
    e.preventDefault();
});

// Live bind
$(document).on('click', '[data-bjax]', function(e){
    new Bjax(this);
    e.preventDefault();
});
```

Onclick attribute

```html
<a href="content.html" onclick="new Bjax(this); return false;">Link</a>
```

# Bjax 2.0.0 (coming soon)

## Links
```js
new Bjax($('#my_a'), {
  'target': '#content',
  'element': '#content',
  'loader': 'default'
});
```

## Forms

```js
new Bjax($('#my_form'), {
  'target': '#content',
  'element': '#content',
  'method': 'post',
  'loader': 'default'
});
```

## Events

```js
var bjax = new Bjax($('#my_a'));
bjax.on('loader:start', function() {
    $('body').addClass('dim')
}).on('loader:end', function() {
    $('body').removeClass('dim')
});
```

## Custom rendering

```js
new Bjax($('#my_a'), {
  'target': '#content',
  'element': '#content'
}).on('render', function(content) {
    return '<b>' + content + '</b>';
})
```

## Custom loaders

```js
Bjax.registerLoader('modern', MyModernLoader);
```

*More customization*

## Custom builds

* jQuery
* zepto.js
* vanillaJS
