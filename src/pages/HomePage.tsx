
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomePage= ({addToCart, setQuantity, totalQty}) => {
  
  return (
    <div>
      <Header totalQty={totalQty} />
      <div>
        <ListItem addToCart={addToCart} setQuantity={setQuantity} />
      </div>
      </div>
  )
}

export default HomePage;