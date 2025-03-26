import styles from '../styles/App.module.css';

const SeenCats = ({ seenCats }) => {
  return (
    <div className={styles.seenCats}>
      <h2 className={styles.seenCatsTitle}>Who have we seen so far?</h2>
      <div>
        {seenCats.map((cat, index) => (
          <div key={`${cat.name}-${index}`} className={styles.seenCatItem}>
            <img 
              src={cat.image} 
              alt={cat.name} 
              className={styles.seenCatImage} 
            />
            <div className={styles.seenCatName}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeenCats;