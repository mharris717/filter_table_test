import Filtertable from 'ember-cli-filtertable/components/filter-table';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Filtertable.extend({
  pagedRecords: pagedArray("filteredRecords", {perPage: 5})
});
