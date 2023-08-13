export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let hi = haystack.length;
  let lo = 0;
  while (lo < hi) {
    const mid = Math.floor((hi + lo) / 2);

    if (haystack[mid] === needle) {
      return true;
    }

    if (haystack[mid] > needle) {
      hi = mid;
      continue;
    }

    lo = mid + 1;
  }

  return false;
}
