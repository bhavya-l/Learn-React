import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    <Alert>
      <span>Hello World</span>
    </Alert>
    </div>;
}
export default App;