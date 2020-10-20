type numstr = number | string;

export function formatDate(date: Date): string {
  let dd: numstr = date.getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm: numstr = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  let yy: numstr = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  let hh: numstr = date.getHours();
  if (hh < 10) hh = `0${hh}`;

  let mn: numstr = date.getMinutes();
  if (mn < 10) mn = `0${mn}`;

  return `${dd}.${mm}.${yy}  ${hh}:${mn}`;
}
