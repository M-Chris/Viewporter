## Viewporter


Viewporter is a jQuery plugin that simplifies cross device and browser sizing issues between client width, height, etc. It creates a class tied to which ever element(s) you want holding break points. The purpose is to alleviate the problems negotiating a viewport or actual client width's and provide a simple API for your styling to be able to be uniform across breakpoints.


It's clean, tested and effective. You'll never need to write media queries again.



## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/jquery.viewporter.min.js"></script>
```    


## Available options:

afixTo: 	'body', //element(s) you'll tie breakpoint classes to 

addEvents: 	true, //recommended to always be true this Adds events for onload and onresize

writeOut: 	false, //if you want to write the info to an element on the page (helpful with debugging)

writeTo: 	'#viewporter_debug', // the element you'd be writing to

classPrefix: 	'breakp-', //prefix for classes and breakpoints

breakPoints: 	['320', '480', '640', '720', '960', '1024'], //breakpoints to trigger and change classes (breakpoints must be in lo to high order)
			
//the follow is used if we are settings the viewport for you

viewportIni: 	'1.0', //viewport initial scale

viewportMax: 	'1.0', //viewport max scale

viewportScale: 	'0' //viewport user scalable




## Example Usage:

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

