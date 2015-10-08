Package.describe({
  name: 'decent10cs:telescope-jumbotron',
  summary: 'A configurable Jumbotron for Telescope.',
  version: '0.0.8',
  git: 'https://github.com/biologio/biolog-jumbotron.git'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    'telescope:core@0.25.0',
    'perak:codemirror@1.2.7',
    'semantic:ui-sidebar@2.1.4',
    'semantic:ui-card@2.1.4'
  ]);

  api.imply('perak:codemirror@1.2.7');

  api.addFiles([
    'lib/client/categories.html',
    'lib/client/categories.js',
    'lib/client/jumbotron.html',
    'lib/client/jumbotron.js',
    'lib/client/jumbotron.scss'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/custom_fields.js',
    'lib/lib.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');

  api.export([
    'JumbotronSettings'
  ]);

});
