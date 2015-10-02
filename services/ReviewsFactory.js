nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];
  factory.addReview = function() {

    factory.reviews.push({ input: factory.userReview, title: factory.userTitle});

    factory.userReview = null;
    factory.userTitle = null;
  };
  return factory;
});
