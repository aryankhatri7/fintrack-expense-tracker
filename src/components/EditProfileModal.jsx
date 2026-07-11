import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function EditProfileModal({ isOpen, onClose }) {
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return toast.error("Name is required");
    }

    try {
      setLoading(true);

      await updateUserProfile(name);

      toast.success("Profile updated successfully");

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Edit Profile
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

          <div>

            <label className="block mb-2 text-sm text-slate-500 dark:text-white/60">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 dark:text-white"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm text-slate-500 dark:text-white/60">
              Email
            </label>

            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 cursor-not-allowed text-slate-500 dark:text-white/50"
            />

          </div>

          <div className="flex gap-3 pt-2">

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
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditProfileModal;