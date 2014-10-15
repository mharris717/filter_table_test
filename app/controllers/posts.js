import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  pagedContent: pagedArray("content", {perPage: 2})
});
