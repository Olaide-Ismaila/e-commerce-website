
import Checkout from "../components/Checkout"
import CheckoutHeader from "../components/CheckoutHeader"



const CheckoutPage = ({cart, totalQty, setCart}) => {

  return (
    <div>
      <CheckoutHeader totalQty={totalQty} />
      <Checkout cart={cart} totalQty={totalQty} setCart={setCart} />
    </div>
  )
}

export default CheckoutPage