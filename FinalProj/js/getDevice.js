$(document).ready(function(){
$("a#getDevice").click(function() {
  $("#myChart").toggle();
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
                         //itemsU.push(value.fields.Name)
                         itemsU.push(value.fields.UsedTimes)//Completed);
                         //items.push(value.fields.Rank)//Time_Estimate);
                         //items.push(value.fields.Travel_times)//converted);
                         dataSetN.push(itemsN);
                         dataSetP.push(itemsP);
                         dataSetU.push(itemsU);
                         console.log(itemsP);
                         console.log(itemsU);
                         console.log(itemsN)
                  }); // end .each
                  console.log(dataSetP);
                  console.log(dataSetU);
                  console.log(dataSetN)



var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataSetN,
        datasets: [{
            label: 'Price',
            yAxisID: 'Price',
            data: dataSetP,

            borderColor: [
                            'rgba(100, 161, 157, 0.75)',
                          ],
            borderWidth: 3,
            fill: false
        },
        {
          label: 'Used Times',
          yAxisID: 'UsedTimes',
          data: dataSetU,
          borderColor: [
                          'rgba(255, 99, 20, 0.75)',
                        ],
          borderWidth: 3,
          fill: false
        }
      ]
    },
    options: {
//scale
        scales: {
          xAxes: [{
                // 背景网格
                gridLines: {
                    // 取消x轴的竖线
                    display: false,
                    // 设置x轴线颜色
                  //  color: "black",
                },
                // x轴标题
                scaleLabel: {
                    display: true,
                    labelString: "Devices Name",
                },
            }],
            yAxes: [{
              id: 'Price',
              type: 'linear',
              position: 'left',
                ticks: {
                    min:100,
                    setpSize:1500,
                },
                scaleLabel: {
                    display: true,
                    labelString: "Price/$",
                },
            },
            {
              id: 'UsedTimes',
              type: 'linear',
              position: 'right',
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                    display: true,
                    labelString: "Used Times",
                },
            }
          ],
          //end scale
          legend: {
            labels: {
                padding: 30,
                // 使用圆形样式
                usePointStyle: true
            },
            // 显示位置
            position: 'bottom'
        },

          tooltips: {
            enabled: true,
    // 同时显示x轴上的数据
    // 这里鼠标移到对应点上会同时显示english和math的成绩
            mode: 'index',
    // 通过回调修改tooltips的标题
            callbacks: {
                title: function (item) {
                  return item[0].xLabel
                }
              }
            }
          }

        }
});
});
});
});
