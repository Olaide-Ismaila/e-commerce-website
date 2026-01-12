import { formatMoney } from "./FormatMoney";
import { getTotalProductPrice } from "./TotalProductPrice";
import { getTotalDeliveryPrice } from "./TotalDeliveryPrice";

export const getTotalPriceB4Tax = (cart)=>{
  const totalPriceB4Tax: number = Number(getTotalProductPrice(cart)) + Number(getTotalDeliveryPrice(cart))
  return formatMoney((totalPriceB4Tax * 10000) / 100);
}