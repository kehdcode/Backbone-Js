//Home View Model
var HomeView = Backbone.View.extend({
    render: function(){
        this.$el.html(
            '<h1>Home Page</h1>'
        );
    }
});

var FirstView = Backbone.View.extend({
    render: function(){
        this.$el.html(
            '<h1>First Page</h1>'
        );
    }
});

var NoRouteView = Backbone.View.extend({
    render: function(){
        this.$el.html(
            '<h1>Oops No Page Found</h1>'
        );
    }
});

var view
var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'first': 'routeToFirst',
        '*default': 'noRoute'
    },
    home: function(){
        console.log("Home Routte");
        if(view){
            view.delegateEvents();
        }
         view = new HomeView({
            el: '#content'
        });
        view.render();
        
    },
    routeToFirst: function(){
        console.log("first Routte");
        if(view){
            view.delegateEvents();
        }
         view = new FirstView({
            el: '#content'
        });
        view.render();
    },
    noRoute: function(){
        console.log("Sorry No Routte");
        if(view){
            view.delegateEvents();
        }
        view = new NoRouteView ({
            el: '#content'
        });
        view.render();
    }
});

var route = new AppRouter();
Backbone.history.start();