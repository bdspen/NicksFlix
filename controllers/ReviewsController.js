nicksFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory, UtilitiesFactory, $stateParams) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
