export function formatDate(date: Date): string {
  let DD; let MM; let YY; let HH; let 
    MN;

  const dd = date.getDate();
  if (dd < 10) {
    DD = `0${dd}`;
  }

  const mm = date.getMonth() + 1;
  if (mm < 10) {
    MM = `0${mm}`;
  }

  const yy = date.getFullYear() % 100;
  if (yy < 10) {
    YY = `0${yy}`;
  }

  const hh = date.getHours();
  if (hh < 10) {
    HH = `0${hh}`;
  }

  const mn = date.getMinutes();
  if (mn < 10) {
    MN = `0${mn}`;
  }

  return `${DD}.${MM}.${YY}  ${HH}:${MN}`;
}
