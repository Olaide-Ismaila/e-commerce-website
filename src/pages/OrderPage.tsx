import Header from "../components/Header";
import Order from "../components/Order";


const OrderPage = ({cart, totalQty}) => {
  return (
    <div>
      <Header totalQty={totalQty} />
      <Order cart={cart} />
    </div>
  )
}

export default OrderPage;