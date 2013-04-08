Widget = {
  VERSION: "0.0.2",
  DESCRIPTION: "",
  DEBUG: true,


  // ## Component.baseOptions
  // Libraries needs to correct run
  baseOptions: {
    '$': '/libs/jquery-1.8.3.js',
    '_': '/libs/underscore.js',
    'Backbone': '/libs/backbone.js',
    'Layout': '/libs/backbone.layoutmanager.js',
    'Handlebars': '/libs/handlebars-1.0.rc.1.js' 
  },

  // ## Component.log ##
  // Wrapper for console.log.
  // Works when Loader.DEBUG is true
  /**
   * Wrapper for console.log.
   * Parameters:
   *   @message [String] - text message
   */   
  log: function( message ){
    if( Widget.DEBUG )
      console.log( message );
  },

  proto: {
    name: "widgetname",
		include: {
      js:{},
			css:{},
			template:{}
		},
		view: {},
		model: {},
		template: {},
    templateData: {},
		// initializing
		init: function(){
      var that = this;

      that.loadRequires( 
        function( component ){
          component.setModel();
          component.setView();
          component.render();
        }.bind( null, that ) 
      );
		},
		// loading libs and files needs to widget
		loadRequires: function( callback ){
      var r = this.include;
      var aList = [];
      var aJSList  = _.values( r.js );
      var aCSSList = _.map( _.values( r.css ), function(item){ return 'css!'+item; } );
      var aHBSList = _.values( r.template ); 
      aList = aJSList.concat( aCSSList, aHBSList );
      Loader.Manager( aList, callback );
		},
		setView: function(){
      this.options = this.view;
    
      if( this.include.template ){
        var template = Handlebars.compile( 
          $("script[data-template-name="+ _.keys(this.include.template)[0] +"]").html()
        );
        template = template( _.extend({},this.view.templateData) ) ;
        _.extend( 
            this.view, 
            {
              model: this.model, 
              //template: this.template ( this.templateData ) 
              //template: Handlebars.compile( this.view.$el.find("script[data-template-name=menu]").html() )
              template: template 
            } 
        );
      }
      else{
        _.extend( this.view, {model: this.model, template: this.template } );
      }

      //_.extend( this.view, {model: this.model, /*template: this.template*/ } );
      this.view = Backbone.Layout.extend( this.view );
		},
		setModel: function(){
      this.model = Backbone.Model.extend( this.model );
		},
		// render view
		render: function(){
      this.view = new this.view();
      this.view.render();
      //this.view.render();
      return this;
		}
	},

  create: function( options, html_el ){
    var obj  = {};
    // reinitialize options
    options = options || {};
		// add standart data
    _.extend( obj, Widget.proto, options );


    //
    if( html_el ){
      obj.view.el = html_el;
    };

    // init object
    obj.init();
		// return object
		return obj;
	},

  // ## Widget.environment ##
  /**
   * initialize and load nessesary libs
   * Parameters:
   *   @callback [function] - run when initialization has been finished
   *   @error [function] - run when raise error
   */  
  environment: function( options, callback, error ){
    // Check for Loader
    if( window["Loader"] ){
      // when no data in options then
      // change options on Component.baseOptions
      if( typeof options === 'undefined' ){
        options = Widget.baseOptions;
      }
      // Other way, create new object from options 
      // and Component.baseOptions
      else{
        // Simple extend of two object
        // But needs before underscore.js
        Object.extend = function(destination,source) {
          for (var property in source)
            destination[property] = source[property];
          return destination;
        };

        options = Object.extend( /*options,*/ Widget.baseOptions, options );
      };

      // Array
      var aFiles = [];
      // Prepare array of libraries url
      for( var property in options ){
        // Fill array aFiles
        aFiles.push( options[property] );
      }

      // Loading nessessary libs when array is not empty
      if( aFiles.length > 0 ){
        Loader.Manager( aFiles, callback, error );
      }
    }
    else{
      Widget.log( "loader.js is nessesary" );
    }
  }

};
