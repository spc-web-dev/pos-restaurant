export function formatToUSDCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatToKHRCurrency(value: number) {
  return new Intl.NumberFormat("km-KH", {
    style: "currency",
    currency: "KHR",
    currencyDisplay: "symbol",
  }).format(value);
}

export function exchangeUSDtoKHR(usd: number): number {
  const exchangeRate = 4100;
  return usd * exchangeRate;
}
