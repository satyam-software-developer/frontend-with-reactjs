import { useParams } from "react-router-dom";
import { ITEMS } from "../Data/itemData";

function ItemDetails() {
  const { id } = useParams();
  const item = ITEMS.find((item) => item.id === id);
//   console.log(item);

  return (
    <>
      <main>
        <h1>ItemDetails</h1>
      </main>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
    </>
  );
}

export default ItemDetails;



// import { useParams } from "react-router-dom";
// import { ITEMS } from "../Data/itemData";

// function ItemDetails() {
//   const { id } = useParams();
//   console.log(id);
//   const item = ITEMS.find((item) => item.id === id);
//   return (
//     <>
//       <main>
//         <h1>ItemDetails</h1>
//       </main>
//       <h2>{item.title}</h2>
//       <h3>{item.detail} </h3>
//     </>
//   );
// }

// export default ItemDetails;
