const Odoo = require("async-odoo-xmlrpc");
 
const onestream = new Odoo({
  url: "https://cda.1streamcrm.com",
  db: "cda.1stream.co.za",
  username: `${process.env.ODOO_USERNAME}`,
  password: `${process.env.ODOO_PASSWORD}`,
});
