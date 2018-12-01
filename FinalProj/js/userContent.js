$(document).ready(function(){
//$("button#get_data2").click(function() {
        var items = [];
        var mapitems = [];
        var airtable_read_endpoint = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Place?api_key=key0BvxEDq9DYkV7a";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        var data = [];
        var user = 0;



                $("button#get_data1").click(function(){
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             items = [];
                                 items.push(value.fields.Name)//Name);
                                 //items.push(value.fields.Notes)//Completed);
                                 //items.push(value.fields.Rank)//Time_Estimate);
                                 //items.push(value.fields.Travel_times)//converted);
                                 dataSet.push(items);
                          });
                        });// end .each
                      )};
                  $("button#get_data2").click(function(){
                  for (var i = 0; i < dataSet.length; i++) {
                    if ($("#form7").text()==dataSet[i]) {
                      user=dataSet[i];
                      break;
                    }
                  }
                });

                $("button#get_data3").click(function(){
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             picitems = [];
                                 picitems.push(value.fields.recurl)//Name);
                                 //items.push(value.fields.Notes)//Completed);
                                 //items.push(value.fields.Rank)//Time_Estimate);
                                 //items.push(value.fields.Travel_times)//converted);
                                 data.push(picitems);
                          });
                        });
                      });
                        $("button#get_data4").click(function(){
                          for (var j = 0; j < data.length; j++) {
                            if (data[j]==user) {
                              $("#2get0").attr ({"src" : data[j]});
                              break;
                            }
                          }
                        });

      });// button ready
      //$("button#get_map1").click(function(){
//end getjson
//});
