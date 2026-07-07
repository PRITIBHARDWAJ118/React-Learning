import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

function Description() {
  return <p>Hello Description!</p>;
}
function App() {
  return (
    <>
      <h1>Hello Priti!</h1>
      <Title/>
      <Description/>
       <button>Hii! Pin me!</button>
       <ProductTab/>
       <Button/>
       <Form/>
    </>
  );
}

export default App;


