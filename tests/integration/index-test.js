import Em from 'ember';
import startApp from '../helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Integration - Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Em.run(App, App.destroy);
  }
});

test("smoke", function() {
  visit("/posts").then(function() {
    equal(find("table").length,1);
    equal(find("td.author").length,5);
  });
});

test("basic filter", function() {
  visit("/posts");
  fillIn("input[type=text]","Adam");

  andThen(function() {
    equal(find("td.author").length,4);
  });
});
