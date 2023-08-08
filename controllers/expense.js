const Expense = require("../models/expense");

exports.postAddExpense = (req, res, next) => {
  try {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    Expense.create({
      amount: amount,
      description: description,
      category: category,
    }).then((expense) => {
      res.json(expense.id);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExpense = (req, res, next) => {
  try {
    const id = req.params.id;
    Expense.findByPk(id).then((expense) => expense.destroy());
  } catch (err) {
    console.log(err);
  }
};

exports.getAllExpenses = (req, res, next) => {
  try {
    Expense.findAll().then((expenses) => res.json(expenses));
  } catch (error) {
    console.log(err);
  }
};
