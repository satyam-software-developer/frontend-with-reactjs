import React from "react";
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemData from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {itemData.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
      <ItemCard name="Apple" price={100} />
    </div>
  );
}

export default Items;
