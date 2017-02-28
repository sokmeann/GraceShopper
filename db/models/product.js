'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  currentPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  priceHistory: {
    type: Sequelize.JSON
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imgUrls: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Product
