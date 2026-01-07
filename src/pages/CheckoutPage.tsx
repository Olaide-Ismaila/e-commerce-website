import Checkout from "../components/Checkout"
import CheckoutHeader from "../components/CheckoutHeader"
import { CartItemProps } from "../data/TypesProps"

const CheckoutPage = ({cart}: CartItemProps[]) => {
  return (
    <div>
      <CheckoutHeader />
      <Checkout cart={cart} />
    </div>
  )
}

export default CheckoutPage