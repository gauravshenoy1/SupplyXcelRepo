// import React from 'react'
// import './WorldClock.scss'
// function Clock() {
//       // Declare map variable in the global scope
//       let map;

//       // Function to populate the select dropdown with time zones
//       function populateTimezones() {
//           const countrySelect = document.getElementById('country-select');

//           // Add country options with time zones
//           const countries = [
//               { name: 'United States', timezone: 'America/New_York' },
//               { name: 'United Kingdom', timezone: 'Europe/London' },
//               { name: 'Japan', timezone: 'Asia/Tokyo' },
//               { name: 'India', timezone: 'Asia/Kolkata' },
//               { name: 'Netherlands', timezone: 'Europe/Amsterdam' },
//               // Add more countries and their time zones here
//           ];

//           countries.forEach(country => {
//               const option = document.createElement('option');
//               option.value = country.timezone;
//               option.innerText = country.name;
//               countrySelect.appendChild(option);
//           });
//       }

//       // Function to display the current time of the selected country
//       function showCurrentTime() {
//           const countrySelect = document.getElementById('country-select');
//           const selectedTimezone = countrySelect.value;

//           if (!selectedTimezone) {
//               alert('Please select a country.');
//               return;
//           }

//           const currentTime = moment().tz(selectedTimezone).format('YYYY-MM-DD HH:mm:ss');

//           const currentTimeElement = document.getElementById('current-time');
//           currentTimeElement.innerText = `Current Time: ${currentTime} (${selectedTimezone})`;

//           // Update the map marker position
//           const latlng = getCountryCoordinates(selectedTimezone);
//           map.setView(latlng, 6);
//           L.marker(latlng).addTo(map)
//               .bindPopup(`Current Time: ${currentTime} (${selectedTimezone})`)
//               .openPopup();
//       }

//       // Function to get the approximate coordinates of the country based on its timezone
//       function getCountryCoordinates(timezone) {
//           switch (timezone) {
//               case 'America/New_York':
//                   return [40.7128, -74.0060]; // New York, USA
//               case 'Europe/London':
//                   return [51.5074, -0.1278]; // London, UK
//               case 'Asia/Tokyo':
//                   return [35.6895, 139.6917]; // Tokyo, Japan
//               case 'Asia/Kolkata':
//                   return [28.6139, 77.2090]; // Delhi, India
//               case 'Europe/Amsterdam':
//                   return [52.3676, 4.9041]; // Amsterdam, Netherlands
//               default:
//                   return [0, 0]; // Default position at the center of the map
//           }
//       }

//       // Call the necessary functions after the moment-timezone library is loaded
//       document.addEventListener('DOMContentLoaded', function () {
//           populateTimezones();

//           // Leaflet map initialization
//           map = L.map('map').setView([0, 0], 2);
//           L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//       });
//   return (
//     <>
//        <div class="world-clock">
//         <h1>World Clock Map</h1>
//         <label for="country-select">Select Country:</label>
//         <select id="country-select">
//             <option value="">Select a country...</option>
//             <option value="America/New_York">United States</option>
//             <option value="Europe/London">United Kingdom</option>
//             <option value="Asia/Tokyo">Japan</option>
//             <option value="Asia/Kolkata">India</option> 
//             <option value="Europe/Amsterdam">Netherlands</option> 
//         </select>

//         <button onClick={()=>{showCurrentTime()}}>Get Current Time</button>

//         <p id="current-time"></p>
//     </div>

//     <div id="map"></div> 
//     </>
//   )
// }

// export default Clock
