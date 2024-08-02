import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SearchResults from './components/SearchResults';


function App() {
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("JFK");
  const [cabinSelection, setCabinSelection] = useState("Economy");

  const [searchResults, setSearchResults] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleCabinChange = (event) => {
    setCabinSelection(event.target.value);
  };
  const handleSubmit = async () => {
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        // 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    };

    const jsonData = {
        'origin': origin,
        'destination': destination,
        'partnerPrograms': [
            'Air Canada',
            'United Airlines',
            'KLM',
            'Qantas',
            'American Airlines',
            'Etihad Airways',
            'Alaska Airlines',
            'Qatar Airways',
            'LifeMiles',
        ],
        'stops': 2,
        'departureTimeFrom': '2024-07-09T00:00:00Z',
        'departureTimeTo': '2024-10-07T00:00:00Z',
        'isOldData': false,
        'limit': 302,
        'offset': 0,
        'cabinSelection': [
            cabinSelection,
        ],
        'date': '2024-07-09T12:00:17.796Z',
    };

    try {
      setisLoading(true)
        const response = await axios.post('https://cardgpt.in/apitest', jsonData, { headers });
        console.log('Response:', response.data.data);
        setSearchResults(response.data.data)
        setisLoading(false)
    } catch (error) {
        console.error('Error:', error);
        setisLoading(false)
    }
};
  return (
    <div className="App">
      <header className="App-header">
        <h6>Choose Origin & Destination Airports</h6>
        
        <div className="dropdown">
          <label htmlFor="origin">Origin</label>
          <select id="origin" value={origin} onChange={handleOriginChange}>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
            <option value="BLR">BLR</option>
          </select>
        </div>

        <div className="dropdown">
          <label htmlFor="destination">Destination</label>
          <select id="destination" value={destination} onChange={handleDestinationChange}>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="LHR">LHR</option>
            <option value="CDG">CDG</option>
            <option value="DOH">DOH</option>
            <option value="SIN">SIN</option>
          </select>
        </div>

          <div className="dropdown">
          <label htmlFor="cabin">Cabin Selection</label>
          <select id="cabin" value={cabinSelection} onChange={handleCabinChange}>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
{/* 
        <div>
          <p>Selected Origin: {origin}</p>
          <p>Selected Destination: {destination}</p>
          <p>Selected Cabin: {cabinSelection}</p>
        </div> */}
        <button onClick={handleSubmit}>Search</button>
      </header>
      {isLoading && <div style={{"color":"white"}}>Loading...</div>}
      {searchResults && <SearchResults results={searchResults}/>}
    </div>
  );
}

export default App;
