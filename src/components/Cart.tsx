


const Cart = ({item}) => {

  return (
    <div className="lg:w-full border rounded-sm p-8 sm:w-full mb-4">
      <h2 className='text-green-700 mb-4 font-semibold'>Delivery Date: Tuesday, February 11</h2>
      <div className="lg:flex space-x-40 sm:block">
        <div className='flex justify-between'>
          <img src={item.image} alt={item.name} className='w-40 h-40 block mr-8' />
          <div>
            <h3 className='w-40 font-semibold h-12 mb-4'>{item.name}</h3>
            <p className='font-semibold'>${(item.priceCents / 100).toFixed(2)}</p>
            <p className='font-medium text-green-700'>Quantity: {item.quantity} Update Delete</p>
          </div>
        </div>
        <div className="">
          <h3 className='font-semibold mb-4'>Choose a delivery option</h3>
          <div className='flex space-x-2 mb-4'>
            <input type="radio" />
            <div>
              <h3 className='font-semibold'>Tuesday, February 11</h3>
              <p className='text-green-700'>FREE Shipping</p>
            </div>
            </div>
            <div className='flex space-x-2 mb-4'>
            <input type="radio" />
            <div>
              <h3 className='font-semibold'>Monday, February 5</h3>
              <p className='text-green-700'>$4.99 - Shipping</p>
            </div>
            </div>
            <div className='flex space-x-2 mb-4'>
            <input type="radio" />
            <div>
              <h3 className='font-semibold'>Wednesday, February 3</h3>
              <p className='text-green-700'>$9.99 - Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;