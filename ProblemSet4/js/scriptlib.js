$(document).ready(function(){
$("button#get_data1").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint ="https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        // "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Restaurant_name)//Name);
                       items.push(value.fields.Restaurant_Address)//Completed);
                       items.push(value.fields.Restaurant_Special_name)//Time_Estimate);
                       items.push(value.fields.Average_Price)//converted);
                       dataSet.push(items);
                }); // end .each
             $("#example").DataTable({
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Restaurant Name",
                       defaultContent:""},
                     { title: "Restaurant Address",
                       defaultContent:"" },
                     { title: "Restaurant Specials",
                       defaultContent:""},
                     { title: "Average Price/HK$",
                       defaultContent:""},
                 ]
             });
        }); // end .getJSON
     }); // end button
     $("button#get_data2").click(function() {
             var items = [];
             var i = 0;
             var airtable_read_endpoint ="https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
             //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
             // "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
             var dataSet = [];
             $.getJSON(airtable_read_endpoint, function(result) {
                    $.each(result.records, function(key,value) {
                        items = [];
                            items.push(value.fields.Restaurant_name)//Name);
                            items.push(value.fields.Restaurant_Address)//Completed);
                            items.push(value.fields.Restaurant_Special_name)//Time_Estimate);
                            items.push(value.fields.Average_Price)//converted);
                            dataSet.push(items);
                     }); // end .each
                  $("#example").DataTable({
                      data: dataSet,
                      retrieve: true,
                      columns: [
                          { title: "Restaurant Name",
                            defaultContent:""},
                          { title: "Restaurant Address",
                            defaultContent:"" },
                          { title: "Restaurant Specials",
                            defaultContent:""},
                          { title: "Average Price/HK$",
                            defaultContent:""},
                      ]
                  });
             }); // end .getJSON
          }); // end button

}); // document ready
