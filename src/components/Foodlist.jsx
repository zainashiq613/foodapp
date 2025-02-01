import Fooditem from "./Fooditem";

/* eslint-disable react/prop-types */
export default function Foodlist(props) {
  return (
    <div>
      {props.recipedata.map((food) => (
        <Fooditem setfoodid={props.setfoodid} food={food} key={food.id} />
      ))}
    </div>
  );
}
