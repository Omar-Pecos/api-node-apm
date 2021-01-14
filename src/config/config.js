const {DB_PROD_NAME,DB_PROD_USER,DB_PROD_PASS,DB_PROD_HOST} = require('./index')


module.exports = {
  "development" : {
    "username": "root",
    "password": null,
    "database": "apm_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test" : {
    "username": "root",
    "password": null,
    "database": "apm_db_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test_prod" : {
    "username": DB_PROD_USER,
    "password": DB_PROD_PASS,
    "database": DB_PROD_NAME,
    "host": DB_PROD_HOST,
    "dialect": "mysql"
  },
  "production" : {
    "username": DB_PROD_USER,
    "password": DB_PROD_PASS,
    "database": DB_PROD_NAME,
    "host": DB_PROD_HOST,
    "dialect": "mysql",
  }
}
