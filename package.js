Package.describe({
  name: 'new3rs:html2canvas',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'html2canvas 0.5.0-beta4',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('html2canvas.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('new3rs:html2canvas');
  api.addFiles('html2canvas-tests.js');
});
