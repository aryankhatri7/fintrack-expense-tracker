import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function ChangePasswordModal({ isOpen, onClose }) {
  const { updatePassword } = useAuth();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = formData;

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return toast.error("All fields are required");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const response = await updatePassword(
        currentPassword,
        newPassword
      );

      toast.success(response.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      onClose();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to change password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Change Password
          </h2>

          <button
            onClick={onClose}
            className="text-xl text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 dark:text-white"
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 dark:text-white"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 dark:text-white"
          />

          <div className="flex gap-3">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-semibold"
            >
              {loading
                ? "Saving..."
                : "Change Password"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ChangePasswordModal;