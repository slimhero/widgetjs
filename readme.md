Widget JS
=========

This is an attempt to create a engine based on component idea for web.
It's widget engine uses requirejs to load file, backbone and 
backbone.layoutmnanager for view and handlebars for templating.  

## Requirements ##

You will need [jQuery](http://www.jquery.com), [RequireJS](http://www.requirejs.org), [Backbone](http://www.backbonejs.org), [Backbone.LayoutManager](https://github.com/tbranyen/backbone.layoutmanager)
and [Handlebars](http://www.handlebarsjs.com)

## Usage ##

For the first time, html file must be consisted RequireJS
```html
<script data-main='/config' src='/libs/require.js'></script>
```

Config.js for RequireJS
```javascript
require(
   [
    "/libs/jquery-1.8.3.js",
    "/libs/underscore.js",
    "/libs/handlebars-1.0.rc.1.js",
    "/libs/backbone.js",
    "/libs/backbone.layoutmanager.js",
    "/widget.js"
   ],
   function(){
    $(document).ready(function() {
      test_widget = new Component.Widget({
        name: "test_widget",
        include: {
          js: { "": "/testlib.js" }
        },
        template: _.template("<h2>TEST</h2>"),
        view: {
          id: "test",
          el: "body"
        }
      });

      test_widget.render();
    });
   }
);
```

## Example ##

Whats happend in the end, you can see in index.html 

