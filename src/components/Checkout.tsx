import Socks from '../images/products/athletic-cotton-socks-6-pairs.jpg';

const Checkout = () => {
  return (
    <div className="m-10">
      <h2 className='mb-4 font-bold text-2xl'>Review your order</h2>
      <div className="lg:flex space-x-4 sm:block">
        <div className="lg:w-[70%] border rounded-sm p-8 sm:w-full mb-4">
          <h2 className='text-green-700 mb-4 font-semibold'>Delivery Date: Tuesday, February 11</h2>
          <div className="lg:flex space-x-40 sm:block">
            <div className='flex justify-between'>
              <img src={Socks} alt="Socks" className='w-40 h-40 block mr-8' />
              <div>
                <h3 className='w-40 font-semibold h-12 mb-4'>Black and Gray atletics socks</h3>
                <p className='font-semibold'>$10.90</p>
                <p className='font-medium text-green-700'>Quantity: 2 Update Delete</p>
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