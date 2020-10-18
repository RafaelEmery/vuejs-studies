# Vue.js Studies

## Basic structures

### v-if, v-else-if and v-else

Conditionals structures, very easy :smile:
```html

```

```javascript

```

### v-for

Simple loop strucure and it will show not only the content but the entire HTML tag.
```html
<li v-for="item in items">
    {{ item.name }} - {{ item.price }}
</li>
```
There are an items array with the items (objects):
```javascript
data: {
    items: [
        { name: Product A, price: 10.0 },
        { name: Product B, price: 15.0 }
    ]
}
```

### v-on:click and @click

Do things when you click at the button.
```html

```

```javascript

```

### Two way data binding with v-model 

Way to kinda connect a var with the chosen HTML tag (input)
```html

```

```javascript

```


### Component 

Creating components in Vue.js by using your custom HTML tag. 
```html

```
And using binding the *item* and the var *todo*
```javascript

```

### @keyup.enter @keyup.enter.ctrl @click.left @click.right @click.middle

Getting user's keys and buttons.

### v-show 

It's different than v-if. It just adds a *style="display: none"* at the element.

### type="checkbox" and type="radio"

These input types is usefull to combine with v-model aka two way data binding. The example is for only **checkbox**:

The difference between **checkbox** and **radio** is that with radio you can select only one element.

### select tag with v-model and v-bind

Simple way to work with selects:

###

###

###

###

###

###