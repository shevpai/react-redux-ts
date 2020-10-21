export function pageCreator(
  pages: number[],
  pagesCount: number,
  currentPage: number,
  pageQuantity: number,
): void {
  if (pagesCount > pageQuantity) {
    if (currentPage > 4) {
      for (let i = currentPage - 3; i <= currentPage + 3; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= pageQuantity; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}
