Loader.Manager( 
  [ 
    '/widget.js' 
  ], 
  function(){ 
    
    Component.init( 
      {"Component.Menu": "widgets/menu/menu.js"}, 
      function(){
        var protoMenu = Component.Menu;
        protoMenu.view.templateData.title = "TesT";
        menu = new Component.Widget( protoMenu, ".context" );
      }
    );
  } 
);


