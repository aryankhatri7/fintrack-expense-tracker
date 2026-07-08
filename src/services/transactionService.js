import api from "./api";

// Get all transactions
export const getTransactions = async (token) => {
  const response = await api.get("/transactions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Create transaction
export const createTransaction = async (transactionData, token) => {
  const response = await api.post("/transactions", transactionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get single transaction
export const getTransactionById = async (id, token) => {
  const response = await api.get(`/transactions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update transaction
export const updateTransaction = async (id, transactionData, token) => {
  const response = await api.put(`/transactions/${id}`, transactionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete transaction
export const deleteTransaction = async (id, token) => {
  const response = await api.delete(`/transactions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};