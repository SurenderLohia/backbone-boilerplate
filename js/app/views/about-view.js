define(function(require) {
  var aboutTpl = require('lib/text!templates/about.html');

  var AboutView = Backbone.View.extend({
    el: '#content',
    template: aboutTpl,
    render: function() {
      $(this.el).html(_.template(this.template));
    }
  });

  return AboutView;
});