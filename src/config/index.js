require('dotenv').config();

module.exports = {
    ENV : process.env.NODE_ENV || 'development',
    CACHE_KEY : process.env.CACHE_KEY,
    DB_PROD_NAME : process.env.DB_PROD_NAME,
    DB_PROD_USER : process.env.DB_PROD_USER,
    DB_PROD_PASS : process.env.DB_PROD_PASS,
    DB_PROD_HOST : process.env.DB_PROD_HOST,
}
