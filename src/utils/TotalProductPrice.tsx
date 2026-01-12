import { formatMoney } from "./FormatMoney";
import { CartItemProps } from "../data/TypesProps";

export const getTotalProductPrice = (cart)=>{
const totalItem = cart.map((item: CartItemProps) => item.priceCents * item.quantity)
const tT = totalItem.reduce((total: number, num: number)=> total + num, 0)
return formatMoney(tT);
}