
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartItemProps } from "../data/TypesProps";
import { formatMoney } from "../utils/FormatMoney";

const Checkout = ({cart, totalQty, setCart}) => {

const getTotalProductPrice = ()=>{
const totalItem = cart.map((item: CartItemProps) => item.priceCents * item.quantity)
const tT = totalItem.reduce((total: number, num: number)=> total + num, 0)
return formatMoney(tT);
}




const getTotalDeliveryPrice = () => {
  const deliveryOption = cart.map((item) => {
  let deliveryPrice: number = 0;
  if (item.delivery === 'three days') {
    return deliveryPrice = 990;
  
  }else if (item.delivery === 'one week') {
    return deliveryPrice = 499
  }else if (item.delivery === "two weeks") {
    return deliveryPrice = 0;
  }
});
  const totalDeliveryPrice = deliveryOption.reduce((total: number, num: number)=> total + (Number(num) || 0), 0);
  return formatMoney(totalDeliveryPrice);
}

const getTotalPriceB4Tax = ()=>{
  const totalPriceB4Tax: number = Number(getTotalProductPrice()) + Number(getTotalDeliveryPrice())
  return formatMoney((totalPriceB4Tax * 10000) / 100);
}

const getTax = () =>{
  return formatMoney((Number(getTotalPriceB4Tax()) * 10000) / 10000);
}

const getTotalPrice = ()=>{
  const totalPrice: number = Number(getTotalPriceB4Tax()) + Number(getTax())
  return formatMoney((totalPrice * 10000) / 100);
}

const handleOrder = ()=>{
  console.log('Order placed');
}

  return (
    <div className="m-10">
      <h2 className='mb-4 font-bold text-2xl'>Review your order</h2>
      <div className="lg:flex space-x-8 sm:block">
        <div>
          {cart.map((item: CartItemProps) => (
          <Cart key={item.id} item={item} setCart={setCart} />
        ))}
        </div>
        <div className='border p-8 lg:w-[30%] rounded-sm text-green-700 sm:w-full font-bold'>
          <h3 className='text-md text-black mb-4'>Payment Summary</h3>
          <p className='mb-4'><span>Items ({totalQty}):</span><span className='float-end'>${getTotalProductPrice()}</span></p>
          <p className='mb-4'><span>Shipping & handling:</span><span className='float-end'>${getTotalDeliveryPrice()}</span></p>
          <p className='mb-4'><span>Total before tax:</span><span className='float-end'>${getTotalPriceB4Tax()}</span> </p>
          <p className='mb-4'><span>Extimated tax (10%):</span><span className='float-end'>${getTax()}</span> </p>
          <p className='mb-4'><span>Order total:</span><span className='float-end'>${getTotalPrice()}</span> </p>
          <Link to='/order'><button onClick={handleOrder} className='bg-green-700 text-white w-full p-2 rounded-sm font-semibold'>Place your order</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout