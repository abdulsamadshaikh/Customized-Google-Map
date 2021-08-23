/*  
Project Name: Customized Google Map
Description: Customized Google Map with detailed info window. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Name: Customized Google Map
*/

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		// Please add your center map latitude and longitude
		center: {
			lat: 37.774929,
			lng: -122.419418,
		},
		zoom: 13.5,
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	const markers = [
		[
			'Location One',
			// Please add your map pin latitude and longitude
			37.791012,
			-122.402100,
			`<div id="mapWindowContent">
		    	<div class="firstHeading">
		    		<h2>Location One</h2>
		    	</div>
		    	<div class="bodyContent">
		    		<div class="vcAddress">
		    			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		    		</div>
		    		<div class="vcBusinessHoursDays">
		    			<div class="vcBusinessDays">
		    				<span>Mon - Thu</span>
		    				<span>Fri</span>
		    				<span>Sat</span>
		    				<span>Sun</span>
		    			</div>
		    			<div class="vcBusinessHours">
		    				<span>05:30-20:00</span>
		    				<span>05:30-18:00</span>
		    				<span>07:00-14:30</span>
		    				<span>10:00-13:00</span>
		    			</div>
		    		</div>
		    		<div class="mapImages">
		    			<div class="mapImage">
		    				<img src="/img/img_1.jpg" alt="map image 1">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_2.jpg" alt="map image 2">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_3.jpg" alt="map image 3">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_4.jpg" alt="map image 4">
		    				<div class="mapImagePagi">
		    					<a href="#more">6 more</a>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </div>`,
			75,
			75
		],
		[
			'Location Two',
			// Please add your map pin latitude and longitude
			37.765251,
			-122.435959,
			`<div id="mapWindowContent">
		    	<div class="firstHeading">
		    		<h2>Location Two</h2>
		    	</div>
		    	<div class="bodyContent">
		    		<div class="vcAddress">
		    			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		    		</div>
		    		<div class="vcBusinessHoursDays">
		    			<div class="vcBusinessDays">
		    				<span>Mon - Thu</span>
		    				<span>Fri</span>
		    				<span>Sat</span>
		    				<span>Sun</span>
		    			</div>
		    			<div class="vcBusinessHours">
		    				<span>05:30-20:00</span>
		    				<span>05:30-18:00</span>
		    				<span>07:00-14:30</span>
		    				<span>10:00-13:00</span>
		    			</div>
		    		</div>
		    		<div class="mapImages">
		    			<div class="mapImage">
		    				<img src="/img/img_1.jpg" alt="map image 1">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_2.jpg" alt="map image 2">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_3.jpg" alt="map image 3">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_4.jpg" alt="map image 4">
		    				<div class="mapImagePagi">
		    					<a href="#more">8 more</a>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </div>`
		],
		[
			'Location Three',
			// Please add your map pin latitude and longitude
			37.776272,
			-122.484917,
			`<div id="mapWindowContent">
		    	<div class="firstHeading">
		    		<h2>Location Three</h2>
		    	</div>
		    	<div class="bodyContent">
		    		<div class="vcAddress">
		    			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		    		</div>
		    		<div class="vcBusinessHoursDays">
		    			<div class="vcBusinessDays">
		    				<span>Mon - Thu</span>
		    				<span>Fri</span>
		    				<span>Sat</span>
		    				<span>Sun</span>
		    			</div>
		    			<div class="vcBusinessHours">
		    				<span>05:30-20:00</span>
		    				<span>05:30-18:00</span>
		    				<span>07:00-14:30</span>
		    				<span>10:00-13:00</span>
		    			</div>
		    		</div>
		    		<div class="mapImages">
		    			<div class="mapImage">
		    				<img src="/img/img_1.jpg" alt="map image 1">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_2.jpg" alt="map image 2">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_3.jpg" alt="map image 3">
		    			</div>
		    			<div class="mapImage">
		    				<img src="/img/img_4.jpg" alt="map image 4">
		    				<div class="mapImagePagi">
		    					<a href="#more">12 more</a>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </div>`
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[3],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
			shouldFocus: false;
			marker.setIcon('/icons/map-pin-selected.png');
		      infowindow.addListener("closeclick", () => {
			    marker.setIcon("/icons/map-pin.png");
			  });
		});
		marker.setIcon("/icons/map-pin.png");
	}
}
