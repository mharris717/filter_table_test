import Filtertable from 'ember-cli-filtertable/components/filter-table';
import PagedArray from 'ember-cli-pagination/local/paged-array';

export default Filtertable.extend({
  afterLoadRecords: function() {
    console.debug("in my afterLoadRecords");
  }.observes("loadRecordsZZZ"),

  // loadRecords: function() {
  //   console.debug("my loadRecords start");
  //   this._super();

  //   var filtered = this.get('filteredRecords');
  //   // if (filtered.length > 99) {
  //   //   filtered = Em.A([filtered[0]]);
  //   //   this.set("filteredRecords",filtered);
  //   // }

  //   filtered = PagedArray.create({content: filtered, perPage: 5});
  //   this.set("filteredRecords",filtered);

  //   console.debug("my loadRecords end");
  // }.observes('textFilter', 'reloadRecords'),

  pagedRecords: function() {
    var filtered = this.get("filteredRecords");
    return PagedArray.create({content: filtered, perPage: 5});
  }.property("filteredRecords.@each")
});
