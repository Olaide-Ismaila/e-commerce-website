import logo from '../images/divine-logo.jpg';

const CheckoutHeader = () => {
  return (
    <div className='lg:flex justify-between px-6 py-4 sm:block'>
      <div className='flex justify-center p-2 font-semibold'>
        <img src={logo} alt="Logo" className='w-10 h-10 mr-4' />
        <h1 className="text-2xl text-green-700">
         DivineProwessStore 
        </h1>
      </div>
      <h3 className='flex justify-center lg:w-full text-2xl p-2'>Checkout(<span className='text-green-700'>0 items</span>)</h3>
      <div className='flex justify-center p-2 text-2xl py-1 lg:px-2 bg-green-700 text-white my-2 rounded-sm'>$=</div>
    </div>
  )
}

export default CheckoutHeader