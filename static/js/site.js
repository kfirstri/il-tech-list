var search = UIkit.util.$('.search-fld');
var searchVal = UIkit.util.$('.search-filter');
var filterBtn = UIkit.util.$$('li[data-uk-filter-control] a');
var formEl = UIkit.util.$('#search-form');
var debounce;

// empty field and attribute on click filter button
UIkit.util.on(filterBtn, 'click', function() {
	var inputVal = search.value;
	if (inputVal.length) {
		// empty field
		search.value = '';
		searchTerm = '[data-tags*=""]';
		// empty attribute
		UIkit.util.attr(searchVal, 'data-uk-filter-control', searchTerm);
		console.log('empty field and attribute');
	}
});
