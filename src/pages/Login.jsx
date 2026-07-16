import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";

import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const { login, loginWithGoogle } =
    useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue managing your finances."
      footerText="Don't have an account?"
      footerLinkText="Create one"
      footerLinkTo="/register"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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
            placeholder="Enter your password"
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

        {/* Forgot Password */}

        <div className="flex justify-end">

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          size="lg"
        >
          {loading ? (
  <>
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
    Signing In...
  </>
) : (
  "Sign In"
)}
        </Button>

        {/* Divider */}

        <div className="relative py-2">

          <div className="absolute inset-0 flex items-center">

            <div className="w-full border-t border-slate-200 dark:border-slate-700" />

          </div>

          <div className="relative flex justify-center">

            <span className="bg-slate-50 px-4 text-sm text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              OR
            </span>

          </div>

        </div>

        {/* Google */}

        <div className="flex justify-center">

          <GoogleLogin
            onSuccess={async (
              credentialResponse
            ) => {
              try {
                await loginWithGoogle(
                  credentialResponse.credential
                );

                toast.success(
                  "Login successful!"
                );

                navigate("/dashboard");
              } catch (error) {
                toast.error(
                  error.response?.data
                    ?.message ||
                    "Google Login Failed"
                );
              }
            }}
            onError={() =>
              toast.error(
                "Google Login Failed"
              )
            }
          />

        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;