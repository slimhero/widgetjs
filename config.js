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


