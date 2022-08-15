// // get data from data.js
// var getData = data;
// // use html elements to add data
// var tbody = d3.select('tbody');
// var input = d3.selectAall('input');
// var button = d3.select('button');


// // append the data 
// inputTable(getData);
// input.on('change', handleChange);
// button.on('click', handleClick);

// // create a function to handle the data
// function inputTable(data) {
//     tbody.html('');
//     data.forEach(item => {
//         var row = tbody.append('tr');
//         Object.values(item).forEach(i => {
//             var element = row.append('td');
//             element.text(i)
//         });
//     });
// };

// // define change function
// function handleChange() {
//     var valueObject = d3.select(this).propery('value');
//     var keyObject = d3.select(this).propery('id');

//     getData = getData.filter(item => item[keyObject] == valueObject);
//     inputTable(getData);
// };

// // define click function
// function handleClick() {
//     input.propery('value', '');
//     getData = data;
//     inputTable(getData);
// };


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
    var timeInsert = d3.select('#date-filter')
})