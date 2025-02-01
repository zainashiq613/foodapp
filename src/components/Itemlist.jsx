import Item from "./Item";

export default function itemlist(props) {
  return (
    <div>
      <div>
        {props.isloading
          ? "loading"
          : props.fooddata.extendedIngredients.map((item) => (
              <Item key={item.name} item={item} />
            ))}
      </div>
    </div>
  );
}
