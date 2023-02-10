# Viewport Size and Breakpoint Detection Library

Viewporter is a library that simplifies cross device and browser sizing issues between client width, height, etc. It creates a class tied to which ever element(s) you want holding break points. The purpose is to alleviate the problems negotiating a viewport or actual client width's and provide a simple API for your styling to be able to be uniform across breakpoints.

## Features
- Retrieves the current viewport dimensions and updates it on resize or load events
- Writes the viewport dimensions to a specified HTML element
- Adds classes to a specified HTML element, based on the breakpoint values provided

## Installation

You can install the library using npm:
```javascript
npm install viewporter-breakpoints
```


## Options

The following options can be passed when instantiating the `Viewporter` class:

| Option | Description | Default |
| ------ | ----------- | ------- |
| `afixTo` | The selector of the HTML element to add the breakpoint classes to | `'body'` |
| `addEvents` | A flag indicating whether to bind to the `resize` and `load` events | `true` |
| `writeOut` | A flag indicating whether to write the viewport dimensions to a specified element | `false` |
| `writeTo` | The selector of the HTML element to write the viewport dimensions to | `'#viewporter_debug'` |
| `classPrefix` | The prefix to use for the breakpoint classes | `'breakp-'` |
| `breakPoints` | An array of breakpoints to determine the breakpoint classes | `[320, 480, 640, 720, 960, 1024]` |
| `viewportIni` | The initial scale of the `viewport` meta tag | `1.0` |
| `viewportMax` | The maximum scale of the `viewport` meta tag | `1.0` |
| `viewportScale` | The user-scalable property of the `viewport` meta tag | `0` |

## Usage

```javascript
const viewporter = new Viewporter({
    afixTo: 'body',
    writeOut: true,
    breakPoints: [320, 480, 720, 1024],
});
```

## Methods

`getViewportSize`: retrieves the current viewport dimensions
`writeStuff`: writes the viewport dimensions to a specified HTML element
`addEvents`: binds to the resize and load events
`handleResize`: the callback for the resize event
`handleLoad`: the callback for the load event
`setClasses`: sets the breakpoint classes on a specified HTML element


# Implementation

Here's how you can use the `Viewporter` class in your project:

### Simple 
```javascript
const viewporter = new Viewporter({ breakPoints: ['480','768','1024'] });
```

### Verbose
```javascript
const options = {
afixTo: 'body',
addEvents: true,
writeOut: false,
writeTo: '#viewporter_debug',
classPrefix: 'breakp-',
breakPoints: [320, 480, 640, 720, 960, 1024],
viewportIni: 1.0,
viewportMax: 1.0,
viewportScale: 0
};

const viewporter = new Viewporter(options);
```


In the example above, we pass an `options` object to the `Viewporter` class that contains configuration settings. The `afixTo` property specifies the CSS selector to apply the breakpoint class to. The `addEvents` property sets whether to listen to the `resize` and `load` events. The `writeOut` property enables or disables writing the current viewport size to a DOM element specified by the `writeTo` selector. The `classPrefix` property sets a custom prefix for the breakpoint classes. The `breakPoints` property sets the breakpoint widths in pixels. The `viewportIni`, `viewportMax`, and `viewportScale` properties set the initial-scale, maximum-scale, and user-scalable values for the `meta` viewport tag.

You can customize these options as per your requirements.



## OLD jQuery Implementation:
You must include files as needed (jquery, jquery.viewporter etc..), I will not be describing that here.
### Basic:
```html
<script>
	jQuery.viewporter({ breakPoints: ['480','600','768'] });
</script>
```


### More Complex:
```html
<script>
	jQuery.viewporter({ afixTo: 'body,.this-other-element', breakPoints: ['480','600','768'] });
</script>
```