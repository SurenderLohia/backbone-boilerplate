define(function(require) {
  var footerTpl = require('lib/text!templates/footer.html');

  var FooterView = Backbone.View.extend({
    el: "#footer",
    template: footerTpl,

    events: {
      'click .about-us-link': 'goToAbout',
      'click .contact-link': 'goToContact',
      'click .home-link': 'goToHome'
    },

    render: function() {
      this.$el.html(_.template(this.template));
    },

    goToAbout: function(e) {
      e.preventDefault();
      app.navigate('about', true);
    },

    goToContact: function(e) {
      e.preventDefault();
      app.navigate('contact', true);
    },

    goToHome: function(e) {
      e.preventDefault();
      app.navigate('', true);
    }
  });

  return FooterView;
});