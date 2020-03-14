(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"error-container\">\n    <h2>404</h2>\n    <h3>Woops!  We couldn't find that page.</h3>\n</main>";
},"useData":true});
templates['Algebra.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<body>\r\n    <h1>Question 1: 2+2=?</h1>\r\n    <p>Answer: 4</p>\r\n    <h1>Question 2: 3x+1=7. What is x?</h1>\r\n    <p>Answer: 2</p>\r\n    <h1>Question 3: (8x*3)/2=20. What is x?</h1>\r\n    <p>Answer: 5/3 or 2.666</p>\r\n</body>\r\n";
},"useData":true});
templates['account.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "this page is not implemented :)";
},"useData":true});
templates['create-account.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/do-create-account\" method=\"POST\">\n    <table>\n        <tr>\n            <td><label for=\"name\">Name</label></td>\n            <td><input type=\"text\" name=\"name\" /></td>\n        </tr>\n        <tr>\n            <td><label for=\"email\">Email Address</label></td>\n            <td><input type=\"text\" name=\"email\" /></td>\n        </tr>\n        <tr>\n            <td><label for=\"password\">Password</label></td>\n            <td><input type=\"password\" name=\"password\" /></td>\n        </tr>\n        <tr>\n            <td><input type=\"submit\" value=\"Create Account\" /></td>\n        </tr>\n    </table>\n</form>";
},"useData":true});
templates['index.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  \n</div>";
},"useData":true});
templates['login.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":15}}}) : helper)))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"message") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
    + "\n<form action=\"/do-login\" method=\"POST\">\n    <table>\n        <tr>\n            <td><label for=\"email\">Email Address</label></td>\n            <td><input type=\"text\" name=\"email\" /></td>\n        </tr>\n        <tr>\n            <td><label for=\"password\">Password</label></td>\n            <td><input type=\"password\" name=\"password\" /></td>\n        </tr>\n        <tr>\n            <td><input type=\"submit\" value=\"Login\" /></td>\n        </tr>\n    </table>\n</form>";
},"useData":true});
templates['topics.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"topic-display card\">\n                        <h1 class=\"topic-display-title\"><a href=\"/topics/"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"parent") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"parent") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a></h1>\n                        <hr>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"childTopics") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":24},"end":{"line":12,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"topic-display-child-topic\"><a href=\"/topics/"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"parent") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table>\n    <tr>\n        <td>\n            <div id=\"content-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"topicData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":5,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </td>\n        <td>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"popularTopicsSidebar"),depth0,{"name":"popularTopicsSidebar","data":data,"blockParams":blockParams,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"popularResourcesSidebar"),depth0,{"name":"popularResourcesSidebar","data":data,"blockParams":blockParams,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </td>\n    </tr>\n</table>\n";
},"usePartial":true,"useData":true,"useBlockParams":true});
templates['upload.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"upload-container\">\n    <h1 style=\"font-size: 30px;\" class=\"topic-display-title\">Upload Learning Resources</h1>\n    <hr>\n    <br>\n\n    <form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n\n        <h2 class=\"remove-h2\">Resource Title</h2>\n        <input name=\"name\" type=\"text\" placeholder=\"Resource title...\">\n        <br>\n        <br>\n\n        <h2 class=\"remove-h2\">Select Parent Topic</h2>\n        <select name=\"topic\" id=\"topic-dropdown\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"topics") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":15,"column":12},"end":{"line":17,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n        <br>\n        <br>\n\n        <h2 class=\"remove-h2\">Resource Type</h2>\n        <select name=\"type\" id=\"type-dropdown\">\n                <option value=\"Textbook\">Textbook</option>\n                <option value=\"Video\">Video</option>\n        </select>\n        <br>\n        <br>\n\n        <h2 class=\"remove-h2\">Description</h2>\n        <textarea name=\"description\"  placeholder=\"Enter description here...\" rows=\"4\" cols=\"50\"></textarea>\n        <br>\n        <br>\n\n        <h2 class=\"remove-h2\">Resource File</h2>\n        <input name=\"resource\" type=\"file\" id=\"img\" name=\"img\" accept=\"image/*\">\n        <input name=\"password\" type=\"text\" class=\"hidden\">\n        \n        <br>\n        <br>\n        <input class=\"submit-button\" type=\"submit\">\n    </form>\n</div>\n\n<script>\n    window.onload = function(){\n        var password = getCookie('user')\n        if(password){\n            document.querySelector('[name=\"password\"]').value = password; \n        }else {\n            document.querySelector('#upload-container').innerHTML = \"<h1>You must be logged in to upload content!</h1>\";\n        }\n    }\n</script>\n";
},"useData":true,"useBlockParams":true});
templates['navbar.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav id=\"navbar\">\n	<div id=\"logo\" class=\"navbar-item\">Learn Something!</div>\n	<a id=\"home\" class=\"navbar-item nav-button\" href=\"/\"><span class=\"sc-icon-container\"><svg class=\"sc-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\" class=\"\"></path></svg></span>Home</a>\n	<a href=\"/topics\" id=\"topics-button\" class=\"navbar-item nav-button\">Topics</a>\n\n	<a href=\"/login\" id=\"account-button\" class=\"navbar-item nav-button\">Login</a>\n	<a href=\"/account\" style=\"float:right; margin-right: 15px;\"id=\"account-button2\" class=\"navbar-item nav-button hidden\">My Account</a>\n	<a href=\"/create-account\" style=\"float:right;\" id=\"create-account-button\" class=\"navbar-item nav-button\">Create Account</a>\n</nav>";
},"useData":true});
templates['popularResourcesSidebar.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li><a href=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"link") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"popularity-sidebar\">\n    <h1 class=\"topic-display-title\" >Popular Resources Today</h1>\n    <hr>\n\n    <ol>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"popularResources") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "    </ol>\n\n</div>\n";
},"useData":true,"useBlockParams":true});
templates['popularTopicsSidebar.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li><a href=\"/topics/LINKS_NOT_FINISHED\">"
    + container.escapeExpression(container.lambda(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"popularity-sidebar\">\n    <h1 class=\"topic-display-title\" >Popular Topics Today</h1>\n    <hr>\n\n    <ol>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"popularTopics") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "    </ol>\n\n</div>\n";
},"useData":true,"useBlockParams":true});
})();