async function delay(duration) {
  if (duration < 0) {
    return null;
  }
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve();
    }, duration);
  });
}

const COMMON_CURRENCIES = {
  FAIR: 'FairGame',
  HOT: 'Hydro Protocol',
  HSR: 'HC',
  MAG: 'Maggie',
  YOYO: 'YOYOW',
  XBT: 'BTC',
  BCC: 'BCH',
  DRK: 'DASH',
  BCHABC: 'BCH',
  BCHSV: 'BSV',
};

const CHANNELS = {
  TICKER: 'spot/ticker', // ticker channel
  CANDLE_60: 'spot/candle60s', // 1mins kline channel
  CANDLE_180: 'spot/candle180s', // 3mins kline channel
  CANDLE_300: 'spot/candle300s', // 5mins kline channel
  CANDLE_900: 'spot/candle900s', // 15mins kline channel
  CANDLE_1800: 'spot/candle1800s', // 30mins kline channel
  CANDLE_3600: 'spot/candle3600s', // 1hour kline channel
  CANDLE_7200: 'spot/candle7200s', // 2hour kline channel
  CANDLE_14400: 'spot/candle14400s', // 4hour kline channel
  CANDLE_21600: 'spot/candle21600s', // 6hour kline channel
  CANDLE_43200: 'spot/candle43200s', // 12hour kline channel
  CANDLE_86400: 'spot/candle86400s', // 1day kline channel
  CANDLE_604800: 'spot/candle604800s', // 1week kline channel
  TRADE: 'spot/trade', // trade information
  DEPTH: 'spot/depth', // depth information,200 entries of depth data for the first time, then increment data
  DEPTH5: 'spot/depth5', // depth information, the previous five entries of depth data
  ACCOUNT: 'spot/account', // User's account information
  MARGIN_ACCOUNT: 'spot/margin_account', // User's margin account information
  ORDER: 'spot/order', // User's order information
};

export { delay, COMMON_CURRENCIES, CHANNELS };
