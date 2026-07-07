import Transaction from "../models/Transaction.js";

// @desc    Create a new transaction
// @route   POST /api/transactions
// @access  Private
export const createTransaction = async (req, res) => {
  try {
    const {
      title,
      amount,
      type,
      category,
      date,
      notes,
      paymentMethod,
    } = req.body;

    // Basic validation
    if (!title || !amount || !type || !category) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    }

    const transaction = await Transaction.create({
      user: req.user._id,
      title,
      amount,
      type,
      category,
      date,
      notes,
      paymentMethod,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};