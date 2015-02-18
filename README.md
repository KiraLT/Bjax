# Welcome to Bjax 1.0.0

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

Download the latest version: https://github.com/KiraLT/Bjax/releases

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
// default
$('[data-bjax]').bjax();

// or with custom settings
$('[data-bjax]').bjax({
    replace: true
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

Bind bjax manually:
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
