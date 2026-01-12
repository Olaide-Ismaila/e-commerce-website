import Header from "../components/Header";
import Socks from '../images/products/athletic-cotton-socks-6-pairs.jpg'

const TrackingPage = ({totalQty}) => {
  return (
    <div className="">
      <Header totalQty={totalQty} />
      <div className="pt-20 mx-20 text-green-700 font-medium">
      <h2 className="font-bold text-2xl text-black mb-2">Arriving on Wednesday, February 5</h2>
      <p>Black and Gray Athletic Cotton Socks - 6 Pairs</p>
      <p>Quantity 1</p>
      <img src={Socks} alt="Socks" className="w-25 h-30 mt-10" />
      </div>
      <div className="m-20 font-bold">
      <div className="flex justify-between">
        <p>Preparing</p>
        <p>Shipped</p>
        <p>Delivered</p> 
      </div>
      <div className="border rounded-xl border-green-700 py-3"><span className="bg-green-700 rounded-xl h-full py-2">socks</span></div>
      </div>
    </div>
  )
}

export default TrackingPage;