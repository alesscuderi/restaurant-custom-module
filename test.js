const assert = require('assert');
const orderManager = require('./index.js');
const orders = require('./orders.json');
const readies = require('./readyOrders.json');
const closed = require('./closedOrders.json');
const news = require('./newOrders.json');


describe('Orders', function() {
  it('Orders array must be of length 3',
    function() {
          assert.equal(orderManager.showOrders().length, 3);
  });

   it('By deleting an order from the initial array, it should be reduced at length 2', function() {
         orderManager.deleteOrder(1);
         assert.equal(orderManager.showOrders().length, 2);
   });

   it('add products works, so the array length is 3 again',
     function() {
         orderManager.addOrder({order: "a picture of the holy family, traditionally decorated with food in christmastime", table: 13, bill: 1500,
         status: "closed"});
         assert.equal(orderManager.showOrders().length, 3);
   });

    it('showProfit works: it must return a default profit of 210'),
      function() {
          orderManager.showProfit();
          assert.equal(orderManager.showProfit(), 210)
    };

 });
