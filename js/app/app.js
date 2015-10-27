require.config({
	baseUrl: 'js/app',
	paths: {
		lib:'../lib'
	}
})

require(['views/header-view', 'views/footer-view', 'views/home-view', 'views/about-view', 'views/contact-view'], function (HeaderView, FooterView, HomeView, AboutView, ContactView) {

	var skills = [
		'HTML',
		'CSS',
		'JavaScript',
		'Knockout',
		'Angular',
		'Backbone'
	]
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "home",
			"about": 'about',
			'contact': 'contact'
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
			this.footerView = new FooterView();
			this.footerView.render();
		},
		home: function() {
	        var model = {};
	        model.skills = skills;

			this.homeView = new HomeView(model);
			this.homeView.render();
		},
		about: function() {
			this.aboutView = new AboutView();
			this.aboutView.render();
		},

		contact: function() {
			this.contactView = new ContactView();
			this.contactView.render();
		}
	});

	
	app = new ApplicationRouter();

	Backbone.history.start({
		pushState: true		
	});
});


