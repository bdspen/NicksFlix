nicksFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory, UtilitiesFactory, $stateParams) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.addReview = function() {
    $scope.reviews.push({ input: userReview, title: factory.userTitle,
      id: reviews.length + 1});
    $scope.userTitle = null;
    $scope.userReview = null;
  }
});
