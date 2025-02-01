/* eslint-disable react/prop-types */
import styles from "./Item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div key={item.name} className={styles.itemcontainer}>
        <div className={styles.imgcontainer}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.namecontainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
