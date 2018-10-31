$(document).ready(function(){
//$("button#get_data2").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        $("button#get_data2").click(function(){
<<<<<<< HEAD
          dataSet=[];
=======
                dataSet=[];
>>>>>>> 547f8d1d30a72ea9c45a4bd41cc856f934ea5e2d
          airtable_read_endpoint = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Place?api_key=key0BvxEDq9DYkV7a";
          $.getJSON(airtable_read_endpoint, function(result) {
                 $.each(result.records, function(key,value) {
                     items = [];
                         items.push(value.fields.Rank)//Name);
                         //items.push(value.fields.Restaurant_Address)//Completed);
                         //items.push(value.fields.Restaurant_Special_name)//Time_Estimate);
                         //items.push(value.fields.Average_Price)//converted);
                         dataSet.push(items);
                  }); // end .each

<<<<<<< HEAD
                  var chart = c3.generate({
        data: {
            columns: [
              ['Lulu', 50,4,3,2],
              ['Olaf', 50,6,8,1]
            ],
            type : 'bar'
        },
        bar: {
            title: "Dogs love:",
        }
     });
=======
                var chart = c3.generate({
                        
       data: {
           columns: 
               ['Rank', dataSet]
               //['sample2', 130, 300, 200, 500, 250, 350]

       },
       axis: {
           x: {
               label: 'X Label'
           },
           y: {
               label: 'Y Label'
           }
       }
   });
          }); // end .getJSON
        });//end get_data2
>>>>>>> 547f8d1d30a72ea9c45a4bd41cc856f934ea5e2d

        $("button#get_data1").click(function(){
          dataSet=[];
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
