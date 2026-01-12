
import dayjs from "dayjs";
import { formatMoney } from "../utils/FormatMoney";
import { CartItemProps } from "../data/TypesProps";

const Cart = ({item, setCart}) => {
const date = dayjs();
const after3Days = date.add(3, 'day');
const after1Week = date.add(7, 'day');
const after2Weeks = date.add(14, 'day');

 const updateDelivery = (id: string, value: "two weeks" | "one week" | "three days")=>{
      setCart((prev: CartItemProps[]) => prev.map((item: CartItemProps) => item.id === id ? {
        ...item, delivery: value} : item ))
    }

const getDeliverydate = (id: string) => {
  if (id === 'three days') {
    return (after3Days.format("dddd, MMMM DD"))
  
  }else if (id === 'one week') {
    return after1Week.format("dddd, MMMM DD")
  }else if (id === "two weeks") {
    return after2Weeks.format("dddd, MMMM DD")
  }
}

  return (
    <div className="lg:w-full border rounded-sm p-8 sm:w-full mb-4">
      <h2 className='text-green-700 mb-4 font-semibold'>Delivery Date: {getDeliverydate(item.delivery)}</h2>
      <div className="lg:flex space-x-40 sm:block">
        <div className='flex justify-between'>
          <img src={item.image} alt={item.name} className='w-40 h-40 block mr-8' />
          <div>
            <h3 className='w-40 font-semibold h-12 mb-4'>{item.name}</h3>
            <p className='font-semibold'>${formatMoney(item.priceCents)}</p>
            <p className='font-medium text-green-700'>Quantity: {item.quantity} Update Delete</p>
          </div>
        </div>
        <div className="">
          <h3 className='font-semibold mb-4'>Choose a delivery option</h3>
          <div className='flex space-x-2 mb-4'>
            <input type="radio" checked={item.delivery === 'two weeks'} name={`delivery-${item.id}`} value="two weeks" onChange={()=>updateDelivery(item.id, "two weeks")} />
            <div>
              <h3 className='font-semibold'>{after2Weeks.format("dddd, MMMM DD")}</h3>
              <p className='text-green-700'>FREE Shipping</p>
            </div>
            </div>
            <div className='flex space-x-2 mb-4'>
            <input type="radio" checked={item.delivery === 'one week'} name={`delivery-${item.id}`} value="one week" onChange={()=>updateDelivery(item.id, "one week")} />
            <div>
              <h3 className='font-semibold'>{after1Week.format("dddd, MMMM DD")}</h3>
              <p className='text-green-700'>$4.99 - Shipping</p>
            </div>
            </div>
            <div className='flex space-x-2 mb-4'>
            <input type="radio" checked={item.delivery === 'three days'} name={`delivery-${item.id}`} value="three days" onChange={()=>updateDelivery(item.id, "three days")} />
            <div>
              <h3 className='font-semibold'>{after3Days.format("dddd, MMMM DD")}</h3>
              <p className='text-green-700'>$9.99 - Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;