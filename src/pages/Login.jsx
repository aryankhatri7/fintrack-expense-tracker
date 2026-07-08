import AuthLayout from "../components/auth/AuthLayout";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue managing your finances."
      footerText="Don't have an account?"
      footerLinkText="Create one"
      footerLinkTo="/register"
    >
      <form className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
        >
          Sign In
        </button>

      </form>
    </AuthLayout>
  );
}

export default Login;