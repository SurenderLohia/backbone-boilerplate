define(function(require) {
  var contactTpl = require('lib/text!templates/contact.html');

  var ContactView = Backbone.View.extend({
    el: '#content',
    template: contactTpl,
    render: function() {
      $(this.el).html(_.template(this.template));
    }
  });

  return ContactView;
});