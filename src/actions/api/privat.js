import axios from 'axios';

const ROOT_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3'

export function fetchExchangeRate() {
  return axios.get(ROOT_URL);
}
