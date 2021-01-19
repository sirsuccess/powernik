export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function filterSingleObject(arrObj, id) {
  return arrObj.filter((user) => user.id === id);
}
export function addNewObject(arrObj, newObj) {
  return arrObj.map((user) => user.id === newObj.id);
}

function convertTimeToMoney(time = "23:14") {
  if (time === "") {
    return 0;
  }
  const timeArr = time.split(":");
  const hr = Number(timeArr[0]);
  const m = Number(timeArr[1]);
  const moreHr = (8 - hr) * 60;
  if (hr < 9) {
    const amount = Math.floor((60 - m + moreHr) / 5) * 50;
    return amount;
  }
  return 0;
}
export function formatCurrency(amount) {
  return amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export function convertTimeToBonus(time) {
  return convertTimeToMoney(time);
}

export function totalBonus(timeArr) {
  return timeArr.reduce(
    (a, b) => a + convertTimeToMoney(Object.values(b)[0]),
    0
  );
}
