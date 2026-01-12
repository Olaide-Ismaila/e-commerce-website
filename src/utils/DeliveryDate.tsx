import dayjs from "dayjs";

const date = dayjs();
const after3Days = date.add(3, 'day');
const after1Week = date.add(7, 'day');
const after2Weeks = date.add(14, 'day');

 export const getDeliverydate = (id: string) => {
  if (id === 'three days') {
    return (after3Days.format("dddd, MMMM DD"))
  
  }else if (id === 'one week') {
    return after1Week.format("dddd, MMMM DD")
  }else if (id === "two weeks") {
    return after2Weeks.format("dddd, MMMM DD")
  }
}