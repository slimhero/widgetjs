Loader.Manager( 
  [ 
    '/widget.js' 
  ], 
  function(){ 
    
    Widget.environment( 
      {"Widget.Menu": "widgets/menu/menu.js"}, 
      function(){
        var protoMenu = Widget.Menu;
        protoMenu.view.templateData.title = "TesT";
        menu = new Widget.create( protoMenu, ".context" );
      }
    );
  } 
);


