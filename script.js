function initMap(){
			var opn={
				zoom:5,
				center:{lat:22.9734,lng:78.6569}
		}
		var map=new google.maps.Map(document.getElementById('map'),opn);
		
		
		var contentString1 = 'Jalandhar, Punjab, India'
        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });
		var marker1=new google.maps.Marker({
			position:{lat:31.2536,lng:75.7037},
			map:map
		});
		marker1.addListener('click', function() {
        	 infowindow1.open(map, marker1);
        });
        
       
		var contentString2 = 'Chennai, Tamil Nadu, India'
        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });
		var marker2=new google.maps.Marker({
			position:{lat:12.8231,lng:80.0453},
			map:map
		});
		marker2.addListener('click', function() {
        	  infowindow2.open(map, marker2);
        });
        
         var contentString3 = 'Kakinada, Andhra Pradesh, India'
        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });	
		var marker3=new google.maps.Marker({
			position:{lat:16.9785,lng:82.2407},
			map:map
		});
		marker3.addListener('click', function() {
    	      infowindow3.open(map, marker3);
        });
        
        
        var contentString4 = 'Hyderabad, Telangana, India'
        var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });
		var marker4=new google.maps.Marker({
			position:{lat:17.4933,lng:78.3916},
			map:map
			});
		marker4.addListener('click', function() {
          infowindow4.open(map, marker4);
        });
        
        var contentString5 = 'Kolhapur, Maharastra India'
        var infowindow5 = new google.maps.InfoWindow({
          content: contentString5
        });
		var marker5=new google.maps.Marker({
			position:{lat:16.6780,lng:74.2555},
			map:map
			});
		marker5.addListener('click', function() {
          infowindow5.open(map, marker5);
        });
       
       
       var contentString6 = 'Kota, Rajasthan, India'
        var infowindow6 = new google.maps.InfoWindow({
          content: contentString6
        });
		var marker6=new google.maps.Marker({
			position:{lat:25.1335,lng:75.8107},
			map:map
			});
		marker6.addListener('click', function() {
          infowindow6.open(map, marker6);
        });
	}
