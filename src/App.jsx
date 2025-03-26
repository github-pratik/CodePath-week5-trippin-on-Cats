import { useState } from 'react';
import BanList from './components/BanList';
import SeenCats from './components/SeenCats';
import styles from './styles/App.module.css';

function App() {
  const [currentCat, setCurrentCat] = useState(null);
  const [bannedAttributes, setBannedAttributes] = useState([]);
  const [seenCats, setSeenCats] = useState([]);

  const handleDiscover = async () => {
    try {

      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      
      if (!apiKey) {
        console.error('API key is missing. Please check your .env file.');
        return;
      }
      

      const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1', {
        headers: {
          'x-api-key': apiKey
        }
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      const catData = data[0];
      

      const breed = catData.breeds[0];
      

      const cat = {
        name: breed.name,
        image: catData.url,
        attributes: [
          breed.origin,
          `${breed.weight.metric} kg`,
          `${breed.life_span} years`,
          breed.temperament.split(',')[0] // Just take the first temperament trait
        ]
      };
      
      setCurrentCat(cat);
      
      // Add to seen cats history if not already there
      if (!seenCats.some(seenCat => seenCat.name === cat.name)) {
        setSeenCats([...seenCats, cat]);
      }
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };

  const handleBanAttribute = (attribute) => {
    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes([...bannedAttributes, attribute]);
    }
  };

  const handleRemoveBan = (attribute) => {
    setBannedAttributes(bannedAttributes.filter(item => item !== attribute));
  };

  return (
    <div className={styles.container}>
      <SeenCats seenCats={seenCats} />
      <div className={styles.mainContent}>
        <div className={styles.card}>
          <h1 className={styles.title}>Veni Vici!</h1>
          <p className={styles.subtitle}>Discover cats from your wildest dreams!</p>
          <div className={styles.emojiRow}>🐱 😺 😸 😹</div>
          
          {currentCat ? (
            <>
              <h2>{currentCat.name}</h2>
              <img
                src={currentCat.image}
                alt={currentCat.name}
                className={styles.catImage}
              />
              <div className={styles.attributes}>
                {currentCat.attributes.map((attribute, index) => (
                  <button
                    key={index}
                    className={styles.attribute}
                    onClick={() => handleBanAttribute(attribute)}
                  >
                    {attribute}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          <button className={styles.discoverButton} onClick={handleDiscover}>
            <span>🔄</span> Discover!
          </button>
        </div>
      </div>
      
      <BanList
        bannedAttributes={bannedAttributes}
        onRemoveBan={handleRemoveBan}
      />
    </div>
  );
}

export default App;
