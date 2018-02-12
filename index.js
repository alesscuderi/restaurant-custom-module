const orders = require('./orders.json');
const readies = require('./readyOrders.json');
const closed = require('./closedOrders.json');
const news = require('./newOrders.json');

var ordersCounter = orders.length+1

var populateLists = function() {
  for (var index in orders) {
    if (orders[index].status == "closed") {
      closed.push (orders[index])
    } else if (orders[index].status == "ready") {
      readies.push (orders[index])
    } else if (orders[index].status == "new") {
      news.push (orders[index])
    }
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
    status: "new"
  });
}


var deleteOrder = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders.splice(index, 1)
    }
  }
}

var setOrderReady = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "ready";
      readies.push(orders[index])
      news.splice(orders[index])
    }
  }
}

var setOrderClosed = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "closed";
      closed.push(orders[index])
      readies.splice(orders[index])
    }
  }
}

var showOrdersAs = function (status) {
    if (status == "new") {
        return news;
    } else if (status == "ready") {
        return readies;
    } else if (status == "closed") {
      return closed;
    }
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
      clientOrders.push(
        {
          id: orders[index].id,
          order: orders[index].order,
          token: orders[index].token,
          bill: orders[index].bill,
          status: orders[index].status
        }
      )
    }
  }
  return clientOrders
}

module.exports = {
  populateLists,
  showOrders,
  addOrder,
  deleteOrder,
  setOrderReady,
  setOrderClosed,
  showOrdersAs,
  showProfit,
  showByUser
};
