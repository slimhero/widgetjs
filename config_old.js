// Require.js allows us to configure shortcut alias

require.config({
  //baseUrl: '/js',
  baseUrl: '../',
  //urlArgs: "addingsfornotcache=" +  (new Date()).getTime(),
  
  pragmasOnSave: {
    //removes Handlebars.Parser code (used to compile template strings) set
    //it to `false` if you need to parse template strings even after build
    excludeHbsParser : true,
    // kills the entire plugin set once it's built.
    excludeHbs: true,
    // removes i18n precompiler, handlebars and json2
    excludeAfterBuild: true
  },
  
  // default plugin settings, listing here just as a reference
  hbs : {
    templateExtension : 'hbs',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    disableI18n : true
  },
  

  modules: [
    {
      name: "config"
    }
  ],
	paths: {
    jquery: '/libs/jquery-1.8.3',
    underscore: "/libs/underscore",
    json: "/libs/json2",
    i18n:  "/libs/i18nprecompile",

    handlebars: 'libs/handlebars-1.0.rc.1',
    hbs: 'libs/hbs',

    backbone: "/libs/backbone",
    backboneLayoutManager: "/libs/backbone.layoutmanager",
		widget: "/widget"
	},
  // The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
  shim: {
    bootstrap: {
      deps: [
        'jquery'
      ],
      exports: '_'
    },
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		},
    backboneLayoutManager: {
      deps: ['backbone'],
      exports: 'Layout'
    },
    handlebars:{
      exports: 'Handlebars'
    },
    widget: {
      deps: [ 'jquery', 'underscore', 'backbone', 'backboneLayoutManager', 'handlebars' ],
      exports: 'Component'
    }
	}
});
//*/

require(
   [/*
    "/libs/jquery-1.8.3.js",
    "/libs/underscore.js",
    "/libs/json2.js",
    "/libs/i18nprecompile.js",
    "/libs/handlebars-1.0.rc.1.js",
    "/libs/backbone.js",
    "/libs/backbone.layoutmanager.js",
		"/widget.js"*///,
    //"/widgets/menu/menu.js"
    "jquery",
    "underscore",
    "backbone",
    "backboneLayoutManager",
		"widget",
    "json",
    "handlebars",
    "i18n",
    //"widgets/menu/menu"

	],
	function($,_,Backbone,Layout,Widget, JSON, Handlebars){
    $(document).ready(function() {
      /*
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
      */ 
      //test_widget = new Component.Widget( Component.Menu );
      //test_widget.render();
		});
	}
);
