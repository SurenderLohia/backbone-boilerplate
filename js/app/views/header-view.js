define(function(require) {
  var headerTpl = require('lib/text!templates/header.html');

  var HeaderView = Backbone.View.extend({
    el: "#header",
    templateFileName: "header.html",
    template: headerTpl,

    initialize: function() {
      // $.get(this.templateFileName, function(data){console.log(data);this.template=data});    
    },
    render: function() {
      $(this.el).html(_.template(this.template));
    }
  });

  return HeaderView;
});