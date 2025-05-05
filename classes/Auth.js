const Customer = require('./Customer');

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer);
    return newCustomer;
  }

  login(email) {
    return this.customers.find(cust => cust.email === email) || null;
  }
}

module.exports = Auth;
