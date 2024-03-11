import { GAMES, GameFromServer, Currency } from "./data";

export function getGamesFromServer(): Promise<GameFromServer[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(price: number, currency: GameFromServer["currency"]) {
  if (currency === Currency.RUB) {
    return `${price} ₽`;
  }
  if (currency === Currency.USD) {
    return `${price} $`;
  }
  if (currency === Currency.EUR) {
    return `${price} €`;
  }
}
