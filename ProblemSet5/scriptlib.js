$(document).ready(function(){
//$("button#get_data2").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        var dataChart = [];
        var dataCate = [];
        $("button#get_data2").click(function(){
          airtable_read_endpoint ="https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Place?api_key=key0BvxEDq9DYkV7a";
          $.getJSON(airtable_read_endpoint, function(result) {
                 $.each(result.records, function(key,value) {
                     dataChart = [];
                     dataCate = [];
                         dataChart.push(value.fields.Travel_times)//Name);
                         //items.push(value.fields.Notes)//Completed);
                         //items.push(value.fields.Rank)//Time_Estimate);
                         //items.push(value.fields.Travel_times)//converted);
                         //dataSet.push(items);
                         dataCate.push(value.fields.Name)
                  }); // end .each
        });
        var chart = c3.generate({
          data: {
                  columns: dataChart

        },
        axis: {
          x: {
               type: 'category',
               categories: dataCate
        },
          y: {
               label: 'Y Label'
        }
    }
});
        $("button#get_data1").click(function(){
          //dataSet=[];
          airtable_read_endpoint ="https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Place?api_key=key0BvxEDq9DYkV7a";
          $.getJSON(airtable_read_endpoint, function(result) {
                 $.each(result.records, function(key,value) {
                     items = [];
                         items.push(value.fields.Name)//Name);
                         items.push(value.fields.Notes)//Completed);
                         items.push(value.fields.Rank)//Time_Estimate);
                         items.push(value.fields.Travel_times)//converted);
                         dataSet.push(items);
                  }); // end .each
               $("#example").DataTable({
                   data: dataSet,
                   retrieve: true,
                   columns: [
                       { title: "Place",
                         defaultContent:""},
                       { title: "Notes",
                         defaultContent:"" },
                       { title: "Recommendation Rank",
                         defaultContent:""},
                       { title: "Mentioned Times",
                         defaultContent:""},
                   ]
               });
          });
      });//end get_data1
}); // document ready
