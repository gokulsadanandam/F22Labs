angular.module('app')
    .config(function($routeProvider,$locationProvider) {
        $routeProvider
            .when('/',{
            	templateUrl:'/client/components/login/login.html',
                controller : 'login'                
            })
            .when('/dash',{
                templateUrl:'/client/components/dash/dash.html',
                controller:'dash'
            })
            .otherwise({
            	redirectTo:'/'
            });
    })