mapboxgl.accessToken = 'pk.eyJ1IjoiYW50aG9ueW5kZyIsImEiOiJjbGdpOGZuYzcwN3doM3BxdnZ0amw5MGZnIn0.j2gWK-ccpjXvJNNDvd4tXQ';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}
        
function setupMap (center) {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/anthonyndg/clgiink9t004g01qlivx2drwn',
    center: center,
    zoom: 14,
    scrollZoom: true
});

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    })
    );

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})
    map.addControl(directions, "top-left")


const stores = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.960733,
            40.773863
          ]
        },
        "properties": {
          "name": "Lenox Hill Hospital",
          "website": "https://lenoxhill.northwell.edu/",
          "phoneFormatted": "(212) 434-2000",
          "phone": "2124342000",
          "address": "100 E 77th St, New York, NY 10075",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "at 15th St NW",
          "postalCode": "10075",
          "state": "N.Y."
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.8931009,
            40.7549376
          ]
        },
        "properties": {
          "name": "New York-Presbyterian Queens Hospital",
          "website": "https://www.nyp.org/queens?",
          "phoneFormatted": "(718) 670-2000",
          "phone": "7186702000",
          "address": "73-15, Northern Boulevard, Queens, NY, 11370,",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "at 22nd St NW",
          "postalCode": "11355",
          "state": "N.Y."
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9520975,
            40.7903112
          ]
        },
        "properties": {
          "name": "The Mount Sinai Hospital",
          "website": "https://www.mountsinai.org/locations/mount-sinai",
          "phoneFormatted": "(212) 241-6500",
          "phone": "2122416500",
          "address": "1468 Madison Ave, New York, NY 10029",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "at Dupont Circle",
          "postalCode": "10029",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9743366310595,
            40.74207345
          ]
        },
        "properties": {
          "name": "NYU Lagone Medical Center",
          "website": "https://nyulangone.org/",
          "phoneFormatted": "(202) 337-9338",
          "phone": "2023379338",
          "address": "550 1st Ave., New York, NY 10016",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "at 34th St NW",
          "postalCode": "10016",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9760830042577,
            40.7395563
          ]
        },
        "properties": {
          "name": "Bellevue Hospital Center",
          "website": "https://www.nychealthandhospitals.org/locations/bellevue/",
          "phoneFormatted": "(212) 562-5555",
          "phone": "2125625555",
          "address": "462 1st Ave., New York, NY 10016",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10016",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9557564763071,
            40.76243945
          ]
        },
        "properties": {
          "name": "Rockefeller University Hospital",
          "website": "https://www.rucares.org/",
          "phoneFormatted": "(212) 327-8000",
          "phone": "2123278000",
          "address": "1230 York Ave, New York, NY 10065",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10065",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9413824,
            40.8415302
          ]
        },
        "properties": {
          "name": "Columbia University Medical Center",
          "website": "https://www.cuimc.columbia.edu/",
          "phoneFormatted": "(212) 305-2862",
          "phone": "2123052862",
          "address": "630 West 168th St New York, NY 10032",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10032",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9743366310595,
            40.74207345
          ]
        },
        "properties": {
          "name": "Tisch Hospital",
          "website": "https://nyulangone.org/locations/tisch-hospital",
          "phoneFormatted": "(646) 929-7870",
          "phone": "6469297870",
          "address": "550 First Avenue New York, NY 10016",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10016",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9529748,
            40.7697091
          ]
        },
        "properties": {
          "name": "Gracie Square Hospital",
          "website": "https://www.nygsh.org/",
          "phoneFormatted": "(212) 434-5300",
          "phone": "2124345300",
          "address": "420 E 76th St, New York, NY 10021",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10021",
          "state": "NY"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -73.9733465,
            40.7501297
          ]
        },
        "properties": {
          "name": "ALSAC/St. Jude Children's Research Hospital",
          "website": "https://www.stjude.org/",
          "phoneFormatted": "(212) 379-1600",
          "phone": "2123791600",
          "address": "220 E 42nd St, New York, NY 10017",
          "city": "New York City",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "10017",
          "state": "NY"
        }
      }
    ]
  };

  stores.features.forEach(function (store, i) {
    store.properties.id = i;
    console.log(store)
  });

  map.on('load', () => {
    map.addLayer({
      id: 'locations',
      type: 'circle',
      source: {
        type: 'geojson',
        data: stores
      }
    });

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
        bbox: [-79.762152, 40.496103 , -71.856214 , 45.01585] 
      });
      
      map.addControl(geocoder, 'top-left');
    buildLocationList(stores);

    geocoder.on('result', (event) => {
        const searchResult = event.result.geometry;
        const options = { units: 'miles' };
        for (const store of stores.features) {
            store.properties.distance = turf.distance(
            searchResult,
            store.geometry,
            options
            );
        }

        stores.features.sort((a, b) => {
            if (a.properties.distance > b.properties.distance) {
              return 1;
            }
            if (a.properties.distance < b.properties.distance) {
              return -1;
            }
            return 0; 
        });

        const listings = document.getElementById('listings');
        while (listings.firstChild) {
            listings.removeChild(listings.firstChild);
        }
        buildLocationList(stores);

        const activeListing = document.getElementById(
            `listing-${stores.features[0].properties.id}`
          );
          activeListing.classList.add('active');
    });
    
  });

  map.on('click', (event) => {
    /* Determine if a feature in the "locations" layer exists at that point. */
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['locations']
    });
  
    /* If it does not exist, return */
    if (!features.length) return;
  
    const clickedPoint = features[0];

    /* Fly to the point */
    flyToStore(clickedPoint);
  
    /* Close all other popups and display popup for clicked store */
    createPopUp(clickedPoint);
  
    /* Highlight listing in sidebar (and remove highlight for all other listings) */
    const activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    const listing = document.getElementById(
      `listing-${clickedPoint.properties.id}`
    );
    listing.classList.add('active');
  });

  function buildLocationList(stores) {
    for (const store of stores.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';
  
      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.name}`;

      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${store.properties.address} <br> ${store.properties.city}`;
      if (store.properties.phone) {
        details.innerHTML += ` · <a class="tel" href="tel:+${store.properties.phone}">${store.properties.phoneFormatted}</a>`;
      }
      if (store.properties.distance) {
        const roundedDistance = Math.round(store.properties.distance * 100) / 100;
        details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
      }
      if(store.properties.website) {
        details.innerHTML += `<form action="${store.properties.website}">
        <input type="submit" value="Go To Website" />
    </form>`
      }

      link.addEventListener('click', function () {
          for (const feature of stores.features) {
            if (this.id === `link-${feature.properties.id}`) {
              flyToStore(feature);
              createPopUp(feature);
            }
          }
          const activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });
  
      
    }
  }
  
  function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }
    
    function createPopUp(currentFeature) {
      const popUps = document.getElementsByClassName('mapboxgl-popup');
      /** Check if there is already a popup on the map and if so, remove it */
      if (popUps[0]) popUps[0].remove();
    
      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(`<h3>${currentFeature.properties.name}</h3><h4>${currentFeature.properties.address}</h4>`)
        .addTo(map);
    }

    
}

