import { formatMoney } from "./FormatMoney";
import { getTotalPriceB4Tax } from "./TotalPriceB4Tax";
import { getTax } from "./Tax";

export const getTotalPrice = (cart)=>{
  const totalPrice: number = Number(getTotalPriceB4Tax(cart)) + Number(getTax(cart))
  return formatMoney((totalPrice * 10000) / 100);
}