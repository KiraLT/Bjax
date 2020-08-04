# Binding links

You can convert all links to Bjax links using `bindLinks` with `a` selector.

```js
bindLinks('a')
```

Or you can bind on data-bjax selector.

```js
bindLinks('[data-bjax]')
```

## Example

<script type="text/javascript" src="../dist/bjax.js"></script>
<script>
    Bjax.bindLinks('[data-bjax]')
</script>

_code:_

```html
<a href="./next-page" data-bjax>Go to next page</a>
```

_example:_

<a href="./next-page" data-bjax>Go to next page</a>
