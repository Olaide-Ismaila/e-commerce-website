import { formatMoney } from "./FormatMoney";

export const getTotalDeliveryPrice = (cart) => {
  const deliveryOption = cart.map((item) => {
  let deliveryPrice: number = 0;
  if (item.delivery === 'three days') {
    return deliveryPrice = 990;
  
  }else if (item.delivery === 'one week') {
    return deliveryPrice = 499
  }else if (item.delivery === "two weeks") {
    return deliveryPrice = 0;
  }
});
  const totalDeliveryPrice = deliveryOption.reduce((total: number, num: number)=> total + (Number(num) || 0), 0);
  return formatMoney(totalDeliveryPrice);
}
