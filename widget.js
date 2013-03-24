$(function(){
  Component = {
    VERSION: "0.0.1",
		description: ""
	};

  Component.proto ={
    name: "widgetname",
		include: {
      js:{},
			css:{},
			template:""
		},
		view: {},
		model: {},
		template: {},
		// initializing
		init: function(){
      this.loadRequires();
			// init model as object
			this.setModel();
      // init view as object
			this.setView();
		},
		// loading libs and files needs to widget
		loadRequires: function(){
      var r = this.include;
      // loading javascript
			var aJSList = _.values( r.js );
      if( aJSList.length > 0 ){
        require( aJSList , function(){alert("!!");}, function(){alert("error");} ); 
			}
			// loading handlebars
			// it can be only one
			if( r.template ){
        if( r.template.length > 0 && r.template !== "" ){
          require( [ ("hbs!" + r.template) ], this.template );
        }
			}
		},
		setView: function(){
      this.options = this.view;
      var view = _.extend( this.view, {model: this.model, template: this.template } );
      this.view = Backbone.Layout.extend( view );
		},
		setModel: function(){
      this.model = Backbone.Model.extend( this.model );
		},
		// render view
		render: function(){
      new this.view().render();
		}
	};

	Component.Widget = function( options ){
    var obj  = {};
    // reinitialize options
    options = options || {};
		// add standart data
    _.extend( obj, Component.proto, options );

    // init object
    obj.init();
		// return object
		return obj;
	};
});
