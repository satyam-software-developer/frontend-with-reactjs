import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => (
  <div
    style={{
      border: `10px solid #fff`,
      margin: "15px",
      padding: "10px"
    }}
  >
    <GrandChildComponent  />
  </div>
);

export default ChildComponent;
