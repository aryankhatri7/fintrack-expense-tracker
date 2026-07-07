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
// @desc    Get all transactions for logged-in user
// @route   GET /api/transactions
// @access  Private
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// @desc    Get single transaction
// @route   GET /api/transactions/:id
// @access  Private
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    // Authorization check
    if (transaction.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to access this transaction",
      });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// @desc    Update a transaction
// @route   PUT /api/transactions/:id
// @access  Private
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    // Authorization check
    if (transaction.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to update this transaction",
      });
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Private
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    // Authorization check
    if (transaction.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to delete this transaction",
      });
    }

    await transaction.deleteOne();

    res.status(200).json({
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};