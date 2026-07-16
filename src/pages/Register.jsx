import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { toast } from "react-toastify";

import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const { register } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await register(name, email, password);

      toast.success(
        "Account created successfully!"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your personal finance journey with FinTrack."
      footerText="Already have an account?"
      footerLinkText="Sign In"
      footerLinkTo="/login"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Full Name
          </label>

          <Input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            leftIcon={<FiUser size={20} />}
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email Address
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            leftIcon={<FiMail size={20} />}
          />

        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
          </label>

          <Input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Create a strong password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            leftIcon={<FiLock size={20} />}
            rightIcon={
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="text-slate-400 transition hover:text-emerald-500"
              >
                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            }
          />

        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          size="lg"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </Button>

      </form>
    </AuthLayout>
  );
}

export default Register;