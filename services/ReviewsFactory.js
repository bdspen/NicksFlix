nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [{ input: "I'm happy, hope you're happy too. Never look back, walk tall, act fine. Have you sought fortune evasive and shy? Beware the savage jaw of 1984.", title: "An All-Too-Serious Breakdown of 'Space Jam'", id: 1}];

  factory.addReview = function() {

    factory.reviews.push({ input: factory.userReview, title: factory.userTitle,
      id: factory.reviews.length + 1});

    factory.userReview = null;
    factory.userTitle = null;
  };
  return factory;
});
