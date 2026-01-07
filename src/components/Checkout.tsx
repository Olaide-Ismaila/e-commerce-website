import { CartItemProps } from "../data/TypesProps"
import Cart from "./Cart"

const Checkout = ({cart}: CartItemProps) => {
  
  return (
    <div className="m-10">
      <h2 className='mb-4 font-bold text-2xl'>Review your order</h2>
      <div className="lg:flex space-x-8 sm:block">
        <div>
          {cart.map(item => (
          <Cart key={item.id} item={item} />
        ))}
        </div>
        <div className='border p-8 lg:w-[30%] rounded-sm text-green-700 sm:w-full'>
          <h3 className='font-bold text-md text-black mb-4'>Payment Summary</h3>
          <p className='mb-4'><span>Items (0):</span><span className='float-end'>$50.74</span> </p>
          <p className='mb-4'><span>Shipping & handling:</span><span className='float-end'>$4.99</span> </p>
          <p className='mb-4'><span>Total before tax:</span><span className='float-end'>$55.73</span> </p>
          <p className='mb-4'><span>Extimated tax (10%):</span><span className='float-end'>$5.57</span> </p>
          <p className='mb-4'><span>Order total:</span><span className='float-end'>$61.30</span> </p>
          <button className='bg-green-700 text-white w-full p-2 rounded-sm font-semibold'>Place your order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout