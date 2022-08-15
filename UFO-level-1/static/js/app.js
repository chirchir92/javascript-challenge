// create necessary variables
var inputTable = data;

// tbdoy to use when appending data
var tbody = d3.select('tbody');

// append the data
inputTable.forEach(i => {
    var tr = tbody.append('tr');
    tr.append('td').text(i.datetime);
    tr.append('td').text(i.city);
    tr.append('td').text(i.state);
    tr.append('td').text(i.country);
    tr.append('td').text(i.shape);
    tr.append('td').text(i.durationMinutes);
    tr.append('td').text(i.comments);
});

var button = d3.select('#filter-btn');

button.on('click', function() {
    var timeInsert = d3.select('#date-filter');
    var dateInsert = timeInsert.property('value');
    var sorted = inputTable.filter(i => i.datetime === dateInsert);

    tbody.html(``);
    // insert the sorted data
    sorted.forEach(i => {
        var tr = tbody.append('tr');
        tr.append('td').text(i.datetime);
        tr.append('td').text(i.city);
        tr.append('td').text(i.state);
        tr.append('td').text(i.country);
        tr.append('td').text(i.shape);
        tr.append('td').text(i.durationMinutes);
        tr.append('td').text(i.comments);
    });
});