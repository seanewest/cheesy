#!/usr/bin/env node

var browserify = require('browserify');
var jstohtml = require('jstohtml');
var thrustCat = require('thrust-cat');
var path = require('path');

var width = 1024;
var height = 600;

var entry = process.argv[2];
if (process.argv[3])
  width = parseInt(process.argv[3]);
if (process.argv[4])
  height = parseInt(process.argv[4]);

entry = path.join(process.cwd(), entry);

browserify(entry).bundle(function(err, buf) {
  if (err)
    handleError(err);

  var html = jstohtml(buf);
  thrustCat(html, width, height, function(err) {
    if (err)
      handleError(err);
  })
})

function handleError(err) {
  console.error(err);
  process.exit(1);
}
