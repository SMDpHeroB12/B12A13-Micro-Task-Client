import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("worker");
  const [error, setError] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name) return setError("Name is required");
    if (!isValidEmail(email))
      return setError("Please enter a valid email address");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
        photoURL,
      });

      // Default coin logic (assignment)
      const coin = role === "worker" ? 10 : 50;

      // DB save will be added later
      console.log({
        name,
        email,
        photoURL,
        role,
        coin,
      });

      const token = await result.user.getIdToken();
      localStorage.setItem("access-token", token);

      navigate("/dashboard");
    } catch {
      setError("Registration failed. Email already exists.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-gray-50">
          <h1 className="text-5xl font-bold">
            <Logo />
          </h1>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Profile Picture URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />

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

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="worker">Worker</option>
              <option value="buyer">Buyer</option>
            </select>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="w-full bg-neutral text-white py-3 rounded-lg">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
