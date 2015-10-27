define(function(require) {
  var homeTpl = require('lib/text!templates/home.html');

  var HomeView = Backbone.View.extend({
    el: "#content",
    // template: "home.html",
    template: _.template(homeTpl),
    initialize: function(options) {
      this.model = options;
    },

    render: function() {
      $(this.el).html(this.template(this.model));
    },
  });

  return HomeView;
});