
import { products } from "../data/Products";

const ListItem = ({addToCart}) => {
  
  return (
    <div >
      <div className="flex flex-wrap justify-center pt-20">
        {products.map((product) =>(
          <div key={product.id} className="w-56 m-5 pr-10 border-r border-gray-300">
            <img src={product.image} alt={product.name} className="w-full h-56 mb-8" />
      <h3 className="font-semibold h-12">{product.name}</h3>
      <div className="flex">
      <img src={`src/images/ratings/${product.rating.stars}.png`} alt="Rating" className="w-30 mr-3" />
      <span className="text-gray-700">{product.rating.count}</span>
      </div>
      <p className="font-bold">${product.priceCents}</p>
      <select name="quantity" id="quantity" className="border-gray-300 border px-2 py-1 rounded-sm mt-2">
        <option value="quantity">Quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button onClick={() => addToCart(product)} className="block mt-4 bg-green-700 py-2 px-4 text-white rounded-sm font-semibold cursor-pointer">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListItem;