$(document).ready(function(){
//$("button#get_data2").click(function() {
        var items = [];
        var mapitems = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Place?api_key=key0BvxEDq9DYkV7a";
        //"https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Food_Recommendation?api_key=key0BvxEDq9DYkV7a"//&maxRecords=3&view=Grid%20view"
        //https://api.airtable.com/v0/appGtLX4GzOC4bWpd/Photo%20Collection?api_key=key0BvxEDq9DYkV7a"
        //"https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        var data = [];

        $("button#get_data1").click(function(){
          //dataSet=[];
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
      });// button ready
      $("button#get_map1").click(function(){
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
               mapitems = {};
                   mapitems["name"] = value.fields.Name;
                   mapitems["url"] = value.fields.url;
                   //items["image_url"] = value.fields.image_url;
                   mapitems["latitud"] = value.fields.Lat;
                   mapitems["longitud"] = value.fields.Lng;
                   data.push(mapitems);
                   console.log(mapitems);

                   }
                }); // end .each
}); //end getjson
var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
var map = L.map('map')
   .addLayer(mapboxTiles)
   .setView([22.287111, 114.191667], 13);
  for (var i in data) {
  var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
  L.marker( latlng )
    .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + data[i].url+'" width = "80px"><br>'+data[i].name + '</a>' )
    .addTo(map);
});//button ready
});//document ready
