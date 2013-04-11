Widget.menuItem = {
  name: "bootsrap_menuItem",
  include: {
    js: { "Bootstrap": "/share/bootstrap/js/bootstrap.js" },
    css: { 
      "bootstrap": "/share/bootstrap/css/bootstrap.css",
      "bootstrap-resp": "/share/bootstrap/css/bootstrap-responsive.css"
    },
    template:{ "menuItem": "hbs!/widgets/menuItem/menuItem.hbs" }
  },
  view:{
    manage: true,
    el: ".nav",
    templateData:{
      id: this.id,
      name: "Test",
      link: "#"
    }
  }
}
