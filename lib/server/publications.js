
Meteor.publish('jumbotron-settings', function() {
  return JumbotronSettings.find();
});
