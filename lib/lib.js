
JumbotronSettings.get = function(setting, defaultValue){
  var jumbotronSettings = JumbotronSettings.find().fetch()[0];

  if(jumbotronSettings && (typeof jumbotronSettings[setting] !== 'undefined')) { // look in HeroSettings collection
    return jumbotronSettings[setting];

  } else if (typeof defaultValue !== 'undefined') { // fallback to default
    return  defaultValue;

  } else { // or return undefined
    return undefined;
  }

};
