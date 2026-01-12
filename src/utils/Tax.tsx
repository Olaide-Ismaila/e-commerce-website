import { formatMoney } from "./FormatMoney";
import { getTotalPriceB4Tax } from "./TotalPriceB4Tax";

export const getTax = (cart) =>{
  return formatMoney((Number(getTotalPriceB4Tax(cart)) * 10000) / 10000);
}