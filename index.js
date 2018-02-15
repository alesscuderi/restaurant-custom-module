const orders = require('./orders.json');

var ordersCounter = orders.length+1

var filter = function (s) {
  if (s === "ready") {
    var ready = [];
    for (var index in orders) {
      if (orders[index].status == "ready") {
        ready.push(orders[index])
      }
    } return ready;

  } else if (s === "closed") {
    var closed = [];
    for (var index in orders) {
      if (orders[index].status == "closed") {
        closed.push(orders[index])
      }
    } return closed;

  } else if (s === "new") {
    var news = [];
    for (var index in orders) {
      if (orders[index].status == "new") {
        news.push(orders[index])
      }
    } return news;
  }
}


var showOrders = function () {
  return orders;
}

var addOrder = function (newOrder) {
  orders.push({
    id: ordersCounter++,
    order: newOrder.order,
    token: newOrder.token,
    bill: newOrder.bill,
    status: "new"});
    console.log("A new order has been Placed: ");
    return newOrder;
};

var deleteOrder = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders.splice(index, 1)
      console.log("the order " + id + " has been deleted:");
      return orders;
    }
  } return null;
}

var setOrderReady = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "ready";
      console.log("the order " + id + "is now set as ready:");
      return orders[index];
      }
    } return null;
  }

var setOrderClosed = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "closed";
      console.log("the order " + id + "is now set as closed:");
      return orders[index];
    }
  } return null;
}

var showProfit = function () {
  var temp = 0;
  for (var index in orders) {
    var profit = orders[index].bill + temp;
    temp = orders[index].bill
  }
  return profit;
}

var showByUser = function (id) {
  var clientOrders = []
  for (var index in orders) {
    if (orders[index].token == id) {
      clientOrders.push(orders[index])
    }
  }
  return clientOrders
}

module.exports = {
  filter,
  showOrders,
  addOrder,
  deleteOrder,
  setOrderReady,
  setOrderClosed,
  showProfit,
  showByUser
};
