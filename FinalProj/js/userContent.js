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
                             picitems = [];
                                 picitems.push(value.fields.url)//Name);
                                 items.push(value.fields.Name)//Completed);
                                 //items.push(value.fields.Rank)//Time_Estimate);
                                 //items.push(value.fields.Travel_times)//converted);
                                 data.push(picitems);
                                 dataSet.push(items);
                                 console.log(data);
                                 console.log(dataSet);
                          });
                          console.log(picitems);
                          console.log(items);
                        });// end .each

                      });

                  $("button#get_data2").click(function(){
                  for (var i = 0; i < dataSet.length; i++) {
                   if ($("#form7").val() == dataSet[i]) {
                      break;
                    }
                    $("#2get0").attr ({"src" : data[i]});
                    //user = dataSet[i];
                 }
                 });


                $("button#get_data3").click(function(){
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             picitems = [];
                                 picitems.push(value.fields.url)//Name);
                                 //items.push(value.fields.Notes)//Completed);
                                 //items.push(value.fields.Rank)//Time_Estimate);
                                 //items.push(value.fields.Travel_times)//converted);
                                 data.push(picitems);
                          });
                        });
                      });
                        $("button#get_data4").click(function(){
                          for (var j = 0; j < data.length; j++) {
                            if (data[j] == user) {

                              break;
                            }
                            $("#2get0").attr ({"src" : data[j]});
                          }
                        });

      });// button ready
      //$("button#get_map1").click(function(){
//end getjson
//});
