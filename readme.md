Widget JS
=========

This is an attempt to create a engine based on component idea for web.
It's widget engine uses loaderjs to load file, backbone and 
backbone.layoutmnanager for view and handlebars for templating.  

## Requirements ##

You will need [jQuery](http://www.jquery.com), [LoaderJS](http://github.com/slimhero/loaderjs), [Backbone](http://www.backbonejs.org), [Backbone.LayoutManager](https://github.com/tbranyen/backbone.layoutmanager)
and [Handlebars](http://www.handlebarsjs.com)

## Usage ##

For the first time, html file must be consisted RequireJS
```html
<script data-main='/config.js' src='loader.js'></script>
```

Config.js for LoaderJS and Example
```javascript
Loader.Manager( 
  [ 
    '/widget.js' 
  ], 
  function(){ 
    
    Widget.environment( 
      {
        "Widget.Menu": "widgets/menu/menu.js",
        "Widget.menuItem": "widgets/menuItem/menuItem.js"
      }, 
      function(){
        var protoMenu = Widget.Menu;
        var protoItem = Widget.menuItem;

        var menu = {};
        var item = {};
        var that = this;

        protoMenu.view.templateData.title = "TesT";
        // Create menu widget with new name
        menu = new Widget.create( 
          protoMenu, 
          ".context", 
          // As soon as menu is created we create his item  
          function( item, protoItem ){
            item = new Widget.create( protoItem, ".nav" );
          }.bind( that, item, protoItem )
        );
      }
    );
  } 
);
```
