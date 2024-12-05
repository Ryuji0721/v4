import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import storeData from './storeData.json'; 

function App() {
  const [selectedRegion, setSelectedRegion] = useState('Tohoku');
  const [stores, setStores] = useState(storeData.regions.Tohoku);

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setStores(storeData.regions[region]); 
  };

  return (
    <div className="App">
      <h1>店舗情報</h1> 
      <select  value={selectedRegion} onChange={handleRegionChange}>
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>

      <div>
        <ul>
          {stores.length > 0 ? (
            stores.map((store, index) => (
              <li key={index}>
                <strong>{store.storeName}</strong><br />
                {store.address}<br />
                {store.phoneNumber}
              </li>
            ))
          ) : (
            <p>現在表示中の地域の店はありません。</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
