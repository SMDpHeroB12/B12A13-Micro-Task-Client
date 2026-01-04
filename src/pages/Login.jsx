import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email))
      return setError("Please enter a valid email address");

    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await userCredential.user.getIdToken();
      localStorage.setItem("access-token", token);

      navigate("/dashboard");
    } catch {
      setError("Incorrect email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      localStorage.setItem("access-token", token);
      navigate("/dashboard");
    } catch {
      setError("Google Sign-In failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        {/* Left */}
        <div className="hidden md:flex items-center justify-center bg-gray-50">
          <h1 className="text-5xl font-bold">
            <Logo />
          </h1>
        </div>

        {/* Right */}
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-6">Log in</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="w-full bg-neutral text-white py-3 rounded-lg">
              Log in
            </button>
          </form>

          <div className="divider my-6">or</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border py-3 rounded-lg flex justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5"
              alt="google"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
