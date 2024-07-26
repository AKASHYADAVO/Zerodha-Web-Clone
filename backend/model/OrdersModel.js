const { model} = require("mongoose");

const {OrdersSchema} = require('../schemas/OrdersSchema');

const OrdersModel =new model ("order", HoldingsSchema);

module.exports = { OrdersModel };