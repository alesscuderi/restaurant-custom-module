# TodoManager
This package contains the functions that manage a retaurant app and its users.
It allows add and delete orders, shows orders by their statuses and changes them.
In addition, it allows the user to see the restaurant profits and shows orders by user
## installation
`npm install restaurantManager-alesscuderi --save`

## Version: 1.2.1
The filtering process has made much more simple and lightweight, as well as the set status process. The functions now don't involve any extra json.

## Functions

### filter(s)
Places orders in different JSONs according to their status.

`if (s === "ready") {
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
}`


### showOrders()
Shows all orders
`var showOrders = function () {
  return orders;
}`

### addOrder(newOrder)
Adds an order

`var addOrder = function (newOrder) {
  orders.push({
    id: ordersCounter++,
    order: newOrder.order,
    token: newOrder.token,
    bill: newOrder.bill,
    status: "new"
  });
}`

### deleteOrder(id)
deletes an order
`var deleteOrder = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders.splice(index, 1)
    }
  }
}`

### setOrderReady(id)
sets an order as ready
`var setOrderReady = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "ready";
      console.log("the order " + id + "is now set as ready:");
      return orders[index];
      }
    } return null;
  }`

### setOrderClosed (id)
sets an order as closed
`var setOrderClosed = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "closed";
      console.log("the order " + id + "is now set as closed:");
      return orders[index];
    }
  } return null;
}`


### showProfit()
shows the total income

`var showProfit = function () {
  var temp = 0;
  for (var index in orders) {
    var profit = orders[index].bill + temp;
    temp = orders[index].bill
  }
  return profit;
}`

## showByUser
shows the orders of a given user.
`var showByUser = function (id) {
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
}`
