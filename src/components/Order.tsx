import {Link} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";


const Order = () => {
  return (
    <div className="pt-20">
      <h2>Your Order</h2>
      <div className="flex justify-between p-10">
      <div className="">
        <h3 className="font-semibold">Order placed</h3>
        <p>January 31</p> 
      </div>
      <div className="">
        <h3>Total</h3>
        <p>$61.30</p>
      </div>
        <div>
         <h3>Order ID</h3>
          <p>ce80771c-6151-9147-ce49b99ba517</p> 
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Black and Gray Athletic Cotton Socks - 6 Pairs</h3>
            <p>Arriving on: Februery 11</p>
            <p>Quantity: 2</p>
            <button>
              <FaCartPlus /> 
              <span>Add to Cart</span>
            </button>
          </div>
          <Link to='/tracking'><button>Track package</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Order;