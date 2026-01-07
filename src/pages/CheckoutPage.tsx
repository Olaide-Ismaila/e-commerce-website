import Checkout from "../components/Checkout"
import CheckoutHeader from "../components/CheckoutHeader"
import { CartItemProps } from "../data/TypesProps"

const CheckoutPage = ({cart, totalQty}) => {
  return (
    <div>
      <CheckoutHeader totalQty={totalQty} />
      <Checkout cart={cart} />
    </div>
  )
}

export default CheckoutPage