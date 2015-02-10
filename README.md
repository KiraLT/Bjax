# Welcome to Bjax 1.0.0

## About

Ajax link system for modern website. Convert any link in your page to ajax link.

## Usage

```
$('[selector]').bjax(options);
```

### Binding

#### Bind every link

*JavaScript*

```
$('a').bjax();
```

*HTML*

```
<a href="/page">Page</page>
```

#### Bind by data-bjax attribute

*JavaScript*

```
$('[data-bjax]').bjax();
```

*HTML*

```
<a href="/page" data-bjax>Page</page>
```

#### Use cases

### Load whole new page 

```
<a href="/page" data-bjax>Page</page>
```

### Load a part of page 

```
<a href="/page" data-target="#content_target" data-element="#content_element">Page</page>
```

### Load a part of page without changing current url 

```
<a href="/page" data-target="#content_target" data-element="#content_element" data-replace="false">Page</page>
```

### Options

Option | Default | Description
--- | --- | ---
url_attribute | data-href or href | URL attribute
url | undefined | custom url
replace_attribute | data-replace | Replace attribute
replace | true | Change page URL after bjax load
element_attribute | data-el | Element attribute
element | html | Element to load
target_attribute | data-target | Target attribute
target | html | Load target
