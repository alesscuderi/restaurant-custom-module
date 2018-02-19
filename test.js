const assert = require('assert');
const orderManager = require('./index.js');
const orders = require('./orders.json');

describe('Orders', function() {
  it('Orders array must be of length 3',
    function() {
        assert.equal(orderManager.showOrders().length, 3);
  });

  it('Filtering works, so the temporary array ready must be of length 1', function () {
        orderManager.filter("ready");
        var temp = []
        for (var index in orders) {
          if (orders[index].status == "ready") {
            temp.push(orders[index])
          }
        }
        assert.equal(temp.length, 1)
   })

  it('showProfit works: it must return a default profit of 210',
    function() {
        orderManager.showProfit();
        assert.equal(orderManager.showProfit(), 210)
  });


  it('setOrderReady works, so order 2 status changes into "ready"', function () {
     orderManager.setOrderReady(2);
     assert.equal(orderManager.showSingleOrder(2).status, "ready")
  });

  it('setOrderClosed works, so order 2 status changes into "closed"', function () {
     orderManager.setOrderClosed(1);
     assert.equal(orderManager.showSingleOrder(1).status, "closed")
  });

   it('By deleting an order from the initial array, it should be reduced at length 2', function() {
         orderManager.deleteOrder(1);
         assert.equal(orderManager.showOrders().length, 2);
   });

   it('addOrder works, so the array length is 3 again',
     function() {
         orderManager.addOrder({order: "a picture of the holy family, traditionally decorated with food in christmastime", table: 13, bill: 1500,
         status: "closed"});
         assert.equal(orderManager.showOrders().length, 3);
   });






 });
