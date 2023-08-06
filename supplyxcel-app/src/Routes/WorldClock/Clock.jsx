import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import moment from 'moment-timezone';
import './WorldClock.scss';

const Clock = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [latLng, setLatLng] = useState([20, 0]);

    const countries = [
        { name: 'United States', timezone: 'America/New_York' },
        { name: 'United Kingdom', timezone: 'Europe/London' },
        { name: 'Japan', timezone: 'Asia/Tokyo' },
        { name: 'India', timezone: 'Asia/Kolkata' },
        { name: 'Netherlands', timezone: 'Europe/Amsterdam' },
    ];

    const handleTimezoneChange = (event) => {
        const selectedTimezone = event.target.value;
        setSelectedTimezone(selectedTimezone);
        const currentTime = moment().tz(selectedTimezone).format('YYYY-MM-DD HH:mm:ss');
        setCurrentTime(currentTime);
        const latlng = getCountryCoordinates(selectedTimezone);
        setLatLng(latlng);
    };

    const getCountryCoordinates = (timezone) => {
        switch (timezone) {
            case 'America/New_York':
                return [40.7128, -74.0060]; // New York, USA
            case 'Europe/London':
                return [51.5074, -0.1278]; // London, UK
            case 'Asia/Tokyo':
                return [35.6895, 139.6917]; // Tokyo, Japan
            case 'Asia/Kolkata':
                return [28.6139, 77.2090]; // Delhi, India
            case 'Europe/Amsterdam':
                return [52.3676, 4.9041]; // Amsterdam, Netherlands
            default:
                return [20, 0]; // Default position
        }
    };

    return (
        <div className="world-clock">
            <h1>World Clock</h1>
            <label htmlFor="country-select">Select Country</label>
            <select id="country-select" value={selectedTimezone} onChange={handleTimezoneChange}>
                <option value="">Select a country...</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.timezone}>
                        {country.name}
                    </option>
                ))}
            </select>

            {selectedTimezone && (
                <div>
                    <p>Current Time: {currentTime} ({selectedTimezone})</p>
                    <MapContainer center={latLng} zoom={6} style={{ height: '400px' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={latLng}>
                            <Popup>
                                Current Time: {currentTime} ({selectedTimezone})
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default Clock;
