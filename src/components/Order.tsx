import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import { FaCartPlus } from "react-icons/fa";
import { getDeliverydate } from '../utils/DeliveryDate';
import { getTotalPrice } from '../utils/TotalPrice';


const Order = ({cart}) => {
  
  return (
    <div className="pt-20 mx-20">
      <h2 className='font-bold text-2xl pb-5'>Your Order</h2>
      <div className="flex justify-between p-10 border">
      <div className="">
        <h3 className="font-semibold">Order placed</h3>
        <p>{dayjs().format("dddd, MMMM DD")}</p> 
      </div>
      <div className="">
        <h3>Total</h3>
        <p>{getTotalPrice(cart)}</p>
      </div>
        <div>
         <h3>Order ID</h3>
          <p>{crypto.randomUUID()}</p> 
        </div>
      </div>
      {cart.map((item)=>(
        <div key={item.id}>
      <div>
        <div className='flex justify-between p-10 border'>
          <img src={item.image} alt={item.name} className='w-25 h-30' />
          <div>
            <h3 className='font-bold'>{item.name}</h3>
            <p className='font-medium'>Arriving on: {getDeliverydate(item.delivery)}</p>
            <p className='font-medium mb-2'>Quantity: {item.quantity}</p>
            <button className='flex space-x-2 bg-green-700 text-white font-medium px-4 py-2 align-middle rounded-sm'>
              <FaCartPlus /> 
              <span>Add to Cart</span>
            </button>
          </div>
          <Link to='/tracking'><button className='border py-4 px-16 rounded-sm font-semibold'>Track package</button></Link>
        </div>
      </div>
        </div>
      ))}
    </div>
  )
}

export default Order;