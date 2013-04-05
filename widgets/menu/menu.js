/*
$( document ).ready( function(){
  if( !Component ){
    Component = {};
  };
*/
  

  Component.Menu = /*_.extend( Component.Widget,*/{
    name: "bootstrap_menu",
    include: {
      js: { "Bootstrap": "/share/bootstrap/js/bootstrap.js" },
      css: { 
        "bootstrap": "/share/bootstrap/css/bootstrap.css",
        "bootstrap-resp": "/share/bootstrap/css/bootstrap-responsive.css"
      },
      template:{ "menu": "hbs!/widgets/menu/menu.hbs" }
    },
    view: {
      el: 'body',
      templateData: { 
        id: this.id,
        title: "Example menu" 
      }
    }
  }/*)*/;/*
});
*/
