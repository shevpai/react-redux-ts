export function starFormatter(count: number): string {
  const str = `${count}`;

  if (str.length === 7) {
    return `${str.slice(0, 1)}M`;
  }
  if (str.length === 6) {
    return `${str.slice(0, 3)}K`;
  }
  if (str.length === 5) {
    return `${str.slice(0, 2)}K`;
  }
  if (str.length === 4) {
    return `${str.slice(0, 1)}K`;
  }
  return str;
}
