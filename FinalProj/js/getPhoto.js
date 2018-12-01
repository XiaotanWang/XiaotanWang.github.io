$(document).ready(function(){
//$("button#get_data2").click(function() {
        var nameitems1 = [];
        var photoitems1 = [];
        var nameitems2 = [];
        var photoitems2 = [];
        var airtable_read_endpoint1 = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Category?api_key=key0BvxEDq9DYkV7a";
        var airtable_read_endpoint2 = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Style?api_key=key0BvxEDq9DYkV7a";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var data = [];
        var dataN = [];
        var data2 = [];
        var dataN2 = [];
        $.getJSON(airtable_read_endpoint1, function(result) {
               $.each(result.records, function(key,value) {
               photoitems1 = [];
               nameitems1 = [];
                   //mapitems["name"] = value.fields.Name;
                   photoitems1.push(value.fields.url);
                   nameitems1.push(value.fields.Name);
                   data.push(photoitems1);
                   dataN.push(nameitems1);
                }); // end .each
    });

    $.getJSON(airtable_read_endpoint2, function(result) {
          $.each(result.records, function(key,value) {
            photoitems2 = [];
            nameitems2 = [];
           //mapitems["name"] = value.fields.Name;
              photoitems2.push(value.fields.url);
              nameitems2.push(value.fields.Name);
              data2.push(photoitems2);
              dataN2.push(nameitems2);
            }); // end .each
  });

    //for (var i = 0; i < mapitem.length; i++) {
    $("a#show").click(function(){

    //$("a#test1").click(function(){
      $("#get0").attr ({"src" : data[0]});$("#name0").text(dataN[0]);
      $("#get1").attr ({"src" : data[1]});$("#name1").text(dataN[1]);
      $("#get2").attr ({"src" : data[2]});$("#name2").text(dataN[2]);
      $("#get3").attr ({"src" : data[3]});$("#name3").text(dataN[3]);
      $("#get4").attr ({"src" : data[4]});$("#name4").text(dataN[4]);
      $("#get5").attr ({"src" : data[5]});$("#name5").text(dataN[5]);
      $("#get6").attr ({"src" : data[6]});$("#name6").text(dataN[6]);
      $("#get7").attr ({"src" : data[7]});$("#name7").text(dataN[7]);
      $("#get8").attr ({"src" : data[8]});$("#name8").text(dataN[8]);
      $("#get9").attr ({"src" : data[9]});$("#name9").text(dataN[9]);
      $("#get10").attr ({"src" : data[10]});$("#name10").text(dataN[10]);
      $("#get11").attr ({"src" : data[11]});$("#name11").text(dataN[11]);
      $("#get12").attr ({"src" : data[12]});$("#name12").text(dataN[12]);
      $("#get13").attr ({"src" : data[13]});$("#name13").text(dataN[13]);
      $("#get14").attr ({"src" : data[14]});$("#name14").text(dataN[14]);
      $("#get15").attr ({"src" : data[15]});$("#name15").text(dataN[15]);

      $("#image").show();
  //$("a#test2").click(function(){
    $("#2get0").attr ({"src" : data2[0]});$("#2name0").text(dataN2[0]);
    $("#2get1").attr ({"src" : data2[1]});$("#2name1").text(dataN2[1]);
    $("#2get2").attr ({"src" : data2[2]});$("#2name2").text(dataN2[2]);
    $("#2get3").attr ({"src" : data2[3]});$("#2name3").text(dataN2[3]);
    $("#2get4").attr ({"src" : data2[4]});$("#2name4").text(dataN2[4]);
    $("#2get5").attr ({"src" : data2[5]});$("#2name5").text(dataN2[5]);
    $("#2get6").attr ({"src" : data2[6]});$("#2name6").text(dataN2[6]);
    $("#2get7").attr ({"src" : data2[7]});$("#2name7").text(dataN2[7]);
    $("#2get8").attr ({"src" : data2[8]});$("#2name8").text(dataN2[8]);
    $("#2get9").attr ({"src" : data2[9]});$("#2name9").text(dataN2[9]);
    $("#2get10").attr ({"src" : data2[10]});$("#2name10").text(dataN2[10]);
    $("#2get11").attr ({"src" : data2[11]});$("#2name11").text(dataN2[11]);
    $("#2get12").attr ({"src" : data2[12]});$("#2name12").text(dataN2[12]);
    $("#2get13").attr ({"src" : data2[13]});$("#2name13").text(dataN2[13]);
    $("#2get14").attr ({"src" : data2[14]});$("#2name14").text(dataN2[14]);
    $("#2get15").attr ({"src" : data2[15]});$("#2name15").text(dataN2[15]);
});
    $("a#colleagesBtn").click(function(){
      $("#colleages").toggle();
    });
    $("a#exhibitionBtn").click(function(){
      $("#exhibition").toggle();
    });
    $("a#portraitBtn").click(function(){
      $("#portrait").toggle();
    });
    $("a#landscapeBtn").click(function(){
      $("#landscape").toggle();
    });
    $("a#tripBtn").click(function(){
      $("#trip").toggle();
    });
    $("a#showsBtn").click(function(){
      $("#shows").toggle();
    });
    $("a#nightBtn").click(function(){
      $("#night").toggle();
    });
    $("a#ceremonyBtn").click(function(){
      $("#ceremony").toggle();
    });
    $("a#animalsBtn").click(function(){
      $("#animals").toggle();
    });
    $("a#concertBtn").click(function(){
      $("#concert").toggle();
    });
    $("a#streetBtn").click(function(){
      $("#street").toggle();
    });
    $("a#friendsBtn").click(function(){
      $("#friends").toggle();
    });
    $("a#foodBtn").click(function(){
      $("#food").toggle();
    });
    $("a#campusBtn").click(function(){
      $("#campus").toggle();
    });
    $("a#architectureBtn").click(function(){
      $("#architecture").toggle();
    });
    $("a#familyBtn").click(function(){
      $("#family").toggle();
    });

    $("a#warmBtn").click(function(){
      $("#warm").toggle();
    });
    $("a#creativeBtn").click(function(){
      $("#creative").toggle();
    });
    $("a#freshBtn").click(function(){
      $("#fresh").toggle();
    });
    $("a#seriousBtn").click(function(){
      $("#serious").toggle();
    });
    $("a#brightBtn").click(function(){
      $("#bright").toggle();
    });
    $("a#recordingBtn").click(function(){
      $("#recording").toggle();
    });
    $("a#longExlosureBtn").click(function(){
      $("#longExlosure").toggle();
    });
    $("a#vintageBtn").click(function(){
      $("#vintage").toggle();
    });
    $("a#backlightingBtn").click(function(){
      $("#backlighting").toggle();
    });
    $("a#symmetricalBtn").click(function(){
      $("#symmetrical").toggle();
    });
    $("a#funnyBtn").click(function(){
      $("#funny").toggle();
    });
    $("a#singleColorBtn").click(function(){
      $("#singleColor").toggle();
    });
    $("a#closeupBtn").click(function(){
      $("#closeup").toggle();
    });
    $("a#japanBtn").click(function(){
      $("#japan").toggle();
    });
    $("a#summerBtn").click(function(){
      $("#summer").toggle();
    });
    $("a#bwBtn").click(function(){
      $("#bw").toggle();
    });
});
