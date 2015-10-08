
/***********************
* JumbotronSettings Schema  *
***********************/

var jumbotronSettingsSchema = new SimpleSchema({
  on: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    label: 'Jumbotron On?'
  },
  title: {
    type: String,
    optional: true,
    label: 'Title'
  },
  subheading: {
    type: String,
    optional: true,
    label: 'Subheading'
  },
  image: {
    type: String,
    optional: true,
    label: 'Background Image'
  },
  extraHtml: {
    type: String,
    optional: true,
    label: 'Extra HTML',
    autoform: {
      rows: 6
    }
  },
  extraCss: {
    type: String,
    optional: true,
    label: 'Extra CSS',
    autoform: {
      rows: 6
    }
  }
});

JumbotronSettings = new Mongo.Collection("jumbotron-settings");
JumbotronSettings.attachSchema(jumbotronSettingsSchema);


var isAdmin = function(userId) {
  return Users.is.admin(userId);
};

JumbotronSettings.allow({
  insert: isAdmin,
  update: isAdmin,
  remove: isAdmin
});


// Create sample jumbotron settings if none exist
if (Meteor.isServer) {
  Meteor.startup(function() {
    if (JumbotronSettings.find().count() < 1) {
      JumbotronSettings.insert({
        on: true,
        title: 'Awesome Thing About My Website',
        subheading: 'Another thing about my brand',
        image: 'http://cloudline.io.s3.amazonaws.com/images/outer-space-hd-wallpaper.jpg',
        extraHtml: '<a class=\"button\" href=\"/submit\">\n  Submit a Post!\n</a>\n<div class=\"learn-more\">\n  <a href=\"#\">Learn more</a> about this site.\n</div>',
        extraCss: '/* Sample styles for HTML above */\n\n.jumbotron .copy .button {\n  background: rgba(33,133,210,0.38);\n  color: #fff;\n  font-size: 1.8em;\n  font-weight: 300;\n  margin: 2em auto 1.2em auto;\n  border-radius: 0;\n  -webkit-transition: background 1s;\n  transition: background 1s;\n}\n\n.jumbotron .copy .button:hover {\n  background: rgba(30, 124, 197, 0.85);\n}\n\n.jumbotron .learn-more {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n.jumbotron .learn-more a {\n  outline: none;\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  text-decoration: none;\n}'
      });
    };
  });
};
