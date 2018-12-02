$(document).ready(function(){
$("a#getDevice").click(function() {
        var items = [];
        var mapitems = [];
        var airtable_read_endpoint = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Device?api_key=key0BvxEDq9DYkV7a";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSetN = [];
        var dataSetP = [];
        var dataSetU = [];
        var data = [];
          $.getJSON(airtable_read_endpoint, function(result) {
                 $.each(result.records, function(key,value) {
                     itemsN = [];
                     itemsP = [];
                     itemsU = [];
                         itemsP.push(value.fields.Name)//Name);
                         itemsP.push(value.fields.Price)
                         //itemsU.push(value.fields.UsedTimes)//Completed);
                         //items.push(value.fields.Rank)//Time_Estimate);
                         //items.push(value.fields.Travel_times)//converted);
                         //dataSetN.push(itemsN);
                         dataSetP.push(itemsP);
                         //dataSetU.push(itemsU);
                         console.log(itemsP);
                  }); // end .each
                  console.log(dataSetP);
                var chart = c3.generate({
                     data: {
                         columns: dataSetP,
                         type : 'bar'
                     },
                     axis: {
                       x: {label: 'Stage'},
                       y: {label: '# of Entries'}
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });
               });
             });
           });
           
