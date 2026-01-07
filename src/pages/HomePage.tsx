
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomePage= ({addToCart}) => {
  
  return (
    <div>
      <Header />
      <div>
        <ListItem addToCart={addToCart} />
      </div>
      </div>
  )
}

export default HomePage;