(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"error-container\">\n    <h2>404</h2>\n    <h3>Woops!  We couldn't find that page.</h3>\n</main>";
},"useData":true});
templates['account.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i>Not yet implemented</i>";
},"useData":true});
templates['index.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  \n</div>";
},"useData":true});
templates['topics.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['navbar.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav id=\"navbar\">\n	<div id=\"logo\" class=\"navbar-item\">Website Name</div>\n	<a id=\"home\" class=\"navbar-item nav-button\" href=\"/\"><span class=\"sc-icon-container\"><svg class=\"sc-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\" class=\"\"></path></svg></span>Home</a>\n	<a href=\"/topics\" id=\"topics-button\" class=\"navbar-item nav-button\">Topics</a>\n\n	<a href=\"/account\" id=\"account-button\" class=\"navbar-item nav-button\">Create Account</a>\n</nav>";
},"useData":true});
})();