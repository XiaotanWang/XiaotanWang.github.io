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
    $("#colleages").mouseenter(function(){
      $("#colleages").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#colleages").mouseleave(function(){
      $("#colleages").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#exhibition").mouseenter(function(){
      $("#exhibition").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#exhibition").mouseleave(function(){
      $("#exhibition").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#portrait").mouseenter(function(){
      $("#portrait").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#portrait").mouseleave(function(){
      $("#portrait").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#landscape").mouseenter(function(){
      $("#landscape").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#landscape").mouseleave(function(){
      $("#landscape").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#trip").mouseenter(function(){
      $("#trip").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#trip").mouseleave(function(){
      $("#trip").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#show").mouseenter(function(){
      $("#show").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#show").mouseleave(function(){
      $("#show").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#night").mouseenter(function(){
      $("#night").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#night").mouseleave(function(){
      $("#night").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#ceremony").mouseenter(function(){
      $("#ceremony").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#ceremony").mouseleave(function(){
      $("#ceremony").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#animals").mouseenter(function(){
      $("#animals").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#animals").mouseleave(function(){
      $("#animals").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#concert").mouseenter(function(){
      $("#concert").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#concert").mouseleave(function(){
      $("#concert").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#street").mouseenter(function(){
      $("#street").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#street").mouseleave(function(){
      $("#street").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#friends").mouseenter(function(){
      $("#friends").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#friends").mouseleave(function(){
      $("#friends").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#food").mouseenter(function(){
      $("#food").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#food").mouseleave(function(){
      $("#food").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#campus").mouseenter(function(){
      $("#campus").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#campus").mouseleave(function(){
      $("#campus").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#architecture").mouseenter(function(){
      $("#architecture").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#architecture").mouseleave(function(){
      $("#architecture").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#family").mouseenter(function(){
      $("#family").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#family").mouseleave(function(){
      $("#family").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#warm").mouseenter(function(){
      $("#warm").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#warm").mouseleave(function(){
      $("#warm").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#creative").mouseenter(function(){
      $("#creative").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#creative").mouseleave(function(){
      $("#creative").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#fresh").mouseenter(function(){
      $("#fresh").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#fresh").mouseleave(function(){
      $("#fresh").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#serious").mouseenter(function(){
      $("#serious").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#serious").mouseleave(function(){
      $("#serious").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#bright").mouseenter(function(){
      $("#bright").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#bright").mouseleave(function(){
      $("#bright").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#recording").mouseenter(function(){
      $("#recording").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#recording").mouseleave(function(){
      $("#recording").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#longExlosure").mouseenter(function(){
      $("#longExlosure").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#longExlosure").mouseleave(function(){
      $("#longExlosure").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#vintage").mouseenter(function(){
      $("#vintage").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#vintage").mouseleave(function(){
      $("#vintage").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#backlighting").mouseenter(function(){
      $("#backlighting").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#backlighting").mouseleave(function(){
      $("#backlighting").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#symmetrical").mouseenter(function(){
      $("#symmetrical").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#symmetrical").mouseleave(function(){
      $("#symmetrical").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#funny").mouseenter(function(){
      $("#funny").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#funny").mouseleave(function(){
      $("#funny").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("singleColor").mouseenter(function(){
      $("singleColor").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("singleColor").mouseleave(function(){
      $("singleColor").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#closeup").mouseenter(function(){
      $("#closeup").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#closeup").mouseleave(function(){
      $("#closeup").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#japan").mouseenter(function(){
      $("#japan").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#japan").mouseleave(function(){
      $("#japan").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#summer").mouseenter(function(){
      $("#summer").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#summer").mouseleave(function(){
      $("#summer").attr({"src":"../FinalProj/img/icon1.png"})
    })

    $("#bw").mouseenter(function(){
      $("#bw").attr({"src":"../FinalProj/img/like.png"});
      $(this).css("cursor","Pointer");
    })
    $("#bw").mouseleave(function(){
      $("#bw").attr({"src":"../FinalProj/img/icon1.png"})
    })

    
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

    $("#colleages").click(function(){
      $("#colleages").attr({"src":"../FinalProj/img/like.png"});
      $("#colleages").mouseleave(function(){
        $("#colleages").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#exhibition").click(function(){
      $("#exhibition").attr({"src":"../FinalProj/img/like.png"});
      $("#exhibition").mouseleave(function(){
        $("#exhibition").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#portrait").click(function(){
      $("#portrait").attr({"src":"../FinalProj/img/like.png"});
      $("#portrait").mouseleave(function(){
        $("#portrait").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#landscape").click(function(){
      $("#landscape").attr({"src":"../FinalProj/img/like.png"});
      $("#landscape").mouseleave(function(){
        $("#landscape").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#trip").click(function(){
      $("#trip").attr({"src":"../FinalProj/img/like.png"});
      $("#trip").mouseleave(function(){
        $("#trip").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#shows").click(function(){
      $("#shows").attr({"src":"../FinalProj/img/like.png"});
      $("#shows").mouseleave(function(){
        $("#shows").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#night").click(function(){
      $("#night").attr({"src":"../FinalProj/img/like.png"});
      $("#night").mouseleave(function(){
        $("#night").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("a#ceremonyBtn").click(function(){
      $(".like").attr({"src":"../FinalProj/img/like.png"});
      $(".like").mouseleave(function(){
        $(".like").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#animals").click(function(){
      $("#animals").attr({"src":"../FinalProj/img/like.png"});
      $("#animals").mouseleave(function(){
        $("#animals").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#concert").click(function(){
      $("#concert").attr({"src":"../FinalProj/img/like.png"});
      $("#concert").mouseleave(function(){
        $("#concert").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#street").click(function(){
      $("#street").attr({"src":"../FinalProj/img/like.png"});
      $("#street").mouseleave(function(){
        $("#street").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#friends").click(function(){
      $("#friends").attr({"src":"../FinalProj/img/like.png"});
      $("#friends").mouseleave(function(){
        $("#friends").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#food").click(function(){
      $("#food").attr({"src":"../FinalProj/img/like.png"});
      $("#food").mouseleave(function(){
        $("#food").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#campus").click(function(){
      $("#campus").attr({"src":"../FinalProj/img/like.png"});
      $("#campus").mouseleave(function(){
        $("#campus").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#architecture").click(function(){
      $("#architecture").attr({"src":"../FinalProj/img/like.png"});
      $("#architecture").mouseleave(function(){
        $("#architecture").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#family").click(function(){
      $("#family").attr({"src":"../FinalProj/img/like.png"});
      $("#family").mouseleave(function(){
        $("#family").attr({"src":"../FinalProj/img/like.png"})
      });
    });

    $("#warm").click(function(){
      $("#warm").attr({"src":"../FinalProj/img/like.png"});
      $("#warm").mouseleave(function(){
        $("#warm").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#creative").click(function(){
      $("#creative").attr({"src":"../FinalProj/img/like.png"});
      $("#creative").mouseleave(function(){
        $("#creative").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#fresh").click(function(){
      $("#fresh").attr({"src":"../FinalProj/img/like.png"});
      $("#fresh").mouseleave(function(){
        $("#fresh").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#serious").click(function(){
      $("#serious").attr({"src":"../FinalProj/img/like.png"});
      $("#serious").mouseleave(function(){
        $("#serious").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#bright").click(function(){
      $("#bright").attr({"src":"../FinalProj/img/like.png"});
      $("#bright").mouseleave(function(){
        $("#bright").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#recording").click(function(){
      $("#recording").attr({"src":"../FinalProj/img/like.png"});
      $("#recording").mouseleave(function(){
        $("#recording").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#longExlosure").click(function(){
      $("#longExlosure").attr({"src":"../FinalProj/img/like.png"});
      $("#longExlosure").mouseleave(function(){
        $("#longExlosure").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#vintage").click(function(){
      $("#vintage").attr({"src":"../FinalProj/img/like.png"});
      $("#vintage").mouseleave(function(){
        $("#vintage").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#backlighting").click(function(){
      $("#backlighting").attr({"src":"../FinalProj/img/like.png"});
      $("#backlighting").mouseleave(function(){
        $("#backlighting").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#symmetrical").click(function(){
      $("#symmetrical").attr({"src":"../FinalProj/img/like.png"});
      $("#symmetrical").mouseleave(function(){
        $("#symmetrical").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#funny").click(function(){
      $("#funny").attr({"src":"../FinalProj/img/like.png"});
      $("#funny").mouseleave(function(){
        $("#funny").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#singleColor").click(function(){
      $("#singleColor").attr({"src":"../FinalProj/img/like.png"});
      $("#singleColor").mouseleave(function(){
        $("#singleColor").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#closeup").click(function(){
      $("#closeup").attr({"src":"../FinalProj/img/like.png"});
      $("#closeup").mouseleave(function(){
        $("#closeup").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#japan").click(function(){
      $("#japan").attr({"src":"../FinalProj/img/like.png"});
      $("#japan").mouseleave(function(){
        $("#japan").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#summer").click(function(){
      $("#summer").attr({"src":"../FinalProj/img/like.png"});
      $("#summer").mouseleave(function(){
        $("#summer").attr({"src":"../FinalProj/img/like.png"})
      });
    });
    $("#bw").click(function(){
      $("#bw").attr({"src":"../FinalProj/img/like.png"});
      $("#bw").mouseleave(function(){
        $("#bw").attr({"src":"../FinalProj/img/like.png"})
      });
    });
});
