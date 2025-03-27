import { config } from '@faustwp/core';

export default config({
  wpUrl: 'http://localhost:10004', // ← byt ut om din WordPress-url är annorlunda
  apiClientSecret: process.env.FAUST_SECRET_KEY,
});
