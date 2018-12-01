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
                         itemsN.push(value.fields.Name)//Name);
                         itemsP.push(value.fields.Price)
                         itemsU.push(value.fields.UsedTimes)//Completed);
                         //items.push(value.fields.Rank)//Time_Estimate);
                         //items.push(value.fields.Travel_times)//converted);
                         dataSetN.push(itemsN);
                         dataSetP.push(itemsP);
                         dataSetU.push(itemsU);
                         //console.log(items);
                  }); // end .each
                  //console.log(dataSet);
                  var chart = c3.generate({
                    data: {
                        columns:[
            ['x', dataSetN], dataSetP, dataSetU
          ],
                        type : 'chart'
                    },
                    axis: {
                      x: {label: 'Stage'},
                      y: {label: '# of Entries'}
                    },
                    //bar: {
                      //  title: "Tasks for Each Stage:",
                    //}
                });

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
      //$("button#get_map1").click(function(){
//end getjson
//});

$("a#get_map1").click(function(){
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
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}
});
//button ready
});//document ready
