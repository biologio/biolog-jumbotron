Package.describe({
  name: 'biolog:jumbotron',
  summary: 'A configurable Jumbotron for Telescope.',
  version: '0.1.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    'telescope:core@0.25.0',
    'perak:codemirror@1.2.7',
    'semantic:ui-sidebar',
    'semantic:ui-card'
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
