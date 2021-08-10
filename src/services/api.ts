import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://01-dtmoney.pages.dev/api',
})
