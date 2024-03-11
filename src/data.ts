export const enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export type GameFromServer = {
  id: number;
  name: string;
  description: string;
  version?: string;
  price?: number;
  tags?: Array<string>;
  forKids: boolean;
  currency: Currency;
};

export const GAMES: Array<GameFromServer> = [
  {
    id: 1,
    name: "Мортал комбат",
    description: "Голые мужчины дерутся с другими голыми мужчинами",
    version: "X",
    price: 1000,
    tags: ["Бои", "Кровь"],
    forKids: false,
    currency: Currency.RUB,
  },
  {
    id: 2,
    name: "Гонки какие-то",
    description: "Голые мужчины дерутся с другими голыми мужчинами",
    price: 700,
    tags: ["Машины", "Драйв", "СтритРейсинг"],
    forKids: true,
    currency: Currency.USD,
  },
  {
    id: 3,
    name: "FIFA",
    description: "Много человек бугают за мячем, по огромному полю",
    forKids: true,
    price: 400,
    currency: Currency.EUR,
  },
];
