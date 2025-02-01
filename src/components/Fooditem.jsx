/* eslint-disable react/prop-types */
import styles from "./Fooditem.module.css";
export default function Fooditem(props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.itemimage}
        src={props.food.image}
        alt={props.food.title}
      />
      <div className={styles.itemcontent}>
        <h1 className={styles.itemname}>{props.food.title}</h1>
      </div>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => props.setfoodid(props.food.id)}
          className={styles.itembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
