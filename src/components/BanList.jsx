import styles from '../styles/App.module.css';

const BanList = ({ bannedAttributes, onRemoveBan }) => {
  return (
    <div className={styles.banList}>
      <h2 className={styles.banListTitle}>Ban List</h2>
      <p className={styles.banListSubtitle}>Select an attribute in your listing to ban it</p>
      <div>
        {bannedAttributes.map((attribute, index) => (
          <div
            key={`${attribute}-${index}`}
            className={styles.bannedItem}
            onClick={() => onRemoveBan(attribute)}
          >
            {attribute}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BanList;