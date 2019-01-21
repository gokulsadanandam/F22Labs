angular.module('app')
    .config(function($routeProvider,$locationProvider) {
        $routeProvider
            .when('/',{
            	templateUrl:'/client/components/login/login.html',
                controller : 'login'                
            })
            .otherwise({
            	redirectTo:'/'
            });
            $locationProvider.html5Mode(true);
    })