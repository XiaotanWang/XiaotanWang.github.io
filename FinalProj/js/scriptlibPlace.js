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
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
               mapitems = {};
                   mapitems["name"] = value.fields.Name;
                   mapitems["image_url"] = value.fields.url;
                   mapitems["url"] = value.fields.recurl;
                   mapitems["latitud"] = value.fields.Lat;
                   mapitems["longitud"] = value.fields.Lng;
                   mapitems["id"] = value.fields.id;
                   data.push(mapitems);
                   console.log(mapitems);
                }); // end .each
    });


$("a#get_map1").click(function(){
  $("#place").toggle();
    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
    var map = L.map('map')
       .addLayer(mapboxTiles)
       .setView([31.228611, 121.474722], 5);

       // create custom icon
    var Icon = L.icon({
    iconUrl: '../FinalProj/img/icon2.png',
    //iconSize: [55, 55], // size of the icon
    popupAnchor: [0,-15]
    });

  for (var i in data) {
  var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
  L.marker( latlng,{icon: Icon} )
  //.bindPopup( '<a href="' + '#' + data[i].id + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}
});

//button ready
});//document ready
