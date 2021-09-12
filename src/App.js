import "./App.css";

const DUMMY_VALUES = [
  {
    id: "v1",
    name: "Bitcoin",
    price: 38889.54523,
    last_updated: new Date(2021, 9, 12),
  },
  {
    id: "v2",
    name: "Etherum",
    price: 2902.569833056416,
    last_updated: new Date(2021, 9, 12),
  },
  {
    id: "v3",
    name: "Cardano",
    price: 2.2565856241136752,
    last_updated: new Date(2021, 9, 12),
  },
  {
    id: "v4",
    name: "Tether",
    price: 0.8462799131642066,
    last_updated: new Date(2021, 9, 12),
  },
];

function App() {
  return (
    <div>
      <p>{DUMMY_VALUES[0].name + " Price in EUR " + DUMMY_VALUES[0].price}</p>
      <p>{DUMMY_VALUES[1].name + " Price in EUR " + DUMMY_VALUES[1].price}</p>
      <p>{DUMMY_VALUES[2].name + " Price in EUR " + DUMMY_VALUES[2].price}</p>
      <p>{DUMMY_VALUES[3].name + " Price in EUR " + DUMMY_VALUES[3].price}</p>
    </div>
  );
}

export default App;
