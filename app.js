var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home',{
    url:"",
    templateUrl: "partials/home.html"
  });
  $stateProvider.state('reviews',{
    url:"/:reviewsId",
    templateUrl: "partials/reviews.html",
    controller: "ReviewsCtrl"
  });
});
