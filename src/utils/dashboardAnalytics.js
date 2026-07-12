export const getCurrentMonthStats = (transactions) => {
  const now = new Date();

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let totalBalance = 0;
  let monthIncome = 0;
  let monthExpense = 0;

  transactions.forEach((transaction) => {
    // Lifetime Balance
    if (transaction.type === "income") {
      totalBalance += transaction.amount;
    } else {
      totalBalance -= transaction.amount;
    }

    const transactionDate = new Date(transaction.date);

    const isCurrentMonth =
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear;

    if (!isCurrentMonth) return;

    if (transaction.type === "income") {
      monthIncome += transaction.amount;
    } else {
      monthExpense += transaction.amount;
    }
  });

  return {
    totalBalance,
    monthIncome,
    monthExpense,
    monthSavings: monthIncome - monthExpense,
  };
};

export const getTopSpendingCategory = (transactions) => {
  const now = new Date();

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const categoryTotals = {};

  transactions.forEach((transaction) => {
    if (transaction.type !== "expense") return;

    const transactionDate = new Date(transaction.date);

    const isCurrentMonth =
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear;

    if (!isCurrentMonth) return;

    categoryTotals[transaction.category] =
      (categoryTotals[transaction.category] || 0) +
      transaction.amount;
  });

  const entries = Object.entries(categoryTotals);

  if (entries.length === 0) {
    return null;
  }

  const [category, amount] = entries.reduce((max, current) =>
    current[1] > max[1] ? current : max
  );

  const totalExpenses = entries.reduce(
    (sum, [, value]) => sum + value,
    0
  );

  return {
    category,
    amount,
    percentage: ((amount / totalExpenses) * 100).toFixed(1),
  };
};
export const getMonthlySummary = (transactions) => {
  const now = new Date();

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let income = 0;
  let expenses = 0;
  let transactionCount = 0;

  let biggestExpense = null;

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.date);

    const isCurrentMonth =
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear;

    if (!isCurrentMonth) return;

    transactionCount++;

    if (transaction.type === "income") {
      income += transaction.amount;
    } else {
      expenses += transaction.amount;

      if (
        !biggestExpense ||
        transaction.amount > biggestExpense.amount
      ) {
        biggestExpense = transaction;
      }
    }
  });

  const savings = income - expenses;

  const savingsRate =
    income > 0
      ? ((savings / income) * 100).toFixed(1)
      : 0;

  return {
    income,
    expenses,
    savings,
    savingsRate,
    transactionCount,
    biggestExpense,
  };
};
export const getFinancialHealthScore = (transactions) => {
  const summary = getMonthlySummary(transactions);

  let score = 0;

  // Savings Rate (40 points)
  if (summary.savingsRate >= 40) {
    score += 40;
  } else if (summary.savingsRate >= 25) {
    score += 30;
  } else if (summary.savingsRate >= 10) {
    score += 20;
  } else if (summary.savingsRate > 0) {
    score += 10;
  }

  // Spending vs Income (25 points)
  if (summary.expenses <= summary.income * 0.5) {
    score += 25;
  } else if (summary.expenses <= summary.income * 0.75) {
    score += 18;
  } else if (summary.expenses <= summary.income) {
    score += 10;
  }

  // Positive Savings (20 points)
  if (summary.savings > 0) {
    score += 20;
  }

  // Income Stability (15 points)
  const incomeTransactions = transactions.filter(
    (item) => item.type === "income"
  );

  if (incomeTransactions.length >= 2) {
    score += 15;
  } else if (incomeTransactions.length === 1) {
    score += 8;
  }

  let status = "Needs Improvement";

  if (score >= 80) {
    status = "Excellent";
  } else if (score >= 60) {
    status = "Good";
  } else if (score >= 40) {
    status = "Average";
  }

  return {
    score,
    status,
  };
};
export const getNetWorthData = (transactions) => {
  const summary = getMonthlySummary(transactions);

  const { score, status } =
    getFinancialHealthScore(transactions);

  return {
    balance: summary.savings,
    income: summary.income,
    expenses: summary.expenses,
    savings: summary.savings,
    savingsRate: summary.savingsRate,
    score,
    status,
  };
};