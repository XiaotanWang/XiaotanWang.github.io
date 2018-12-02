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
        //var user = 0;



                //$("button#get_data1").click(function(){
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             items = {};
                             //picitems = [];
                                items["name"] = value.fields.Name
                                items["url"] = value.fields.url//Name);
                                 //Completed);
                                 //items.push(value.fields.Rank)//Time_Estimate);
                                 //items.push(value.fields.Travel_times)//converted);
                                 //data.push(picitems);
                                 dataSet.push(items);
                                 //console.log(data);
                                 //console.log(dataSet);
                                 console.log(items);
                          });
                          //console.log(picitems);
                          //console.log(items);
                        });// end .each
                        $("a#get_data1").click(function(){
                          $("#image").show();
                        for (var i = 0; i < dataSet.length; i++) {
                         if ($("#form7").val() == dataSet[i].name) {
                           $("#2get0").attr ({"src" : dataSet[i].url});
                           $("#name0").text(dataSet[i].name);

                            break;
                          }

                          //user = dataSet[i];
                       }
                      });
      });// button ready
