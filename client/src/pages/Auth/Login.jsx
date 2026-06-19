import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FiMail, FiLock} from "react-icons/fi";
import {toast} from "react-toastify";
import API from "../../services/api";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending:", formData);

    try {
      setLoading(true);

      const {data} = await API.post("/auth/login", formData);

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      toast.success("Login Successful 🚀");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        {/* Left Side */}
        <div className="auth-banner">
          <span>Welcome Back</span>

          <h1>
            Sign In To Your
            <br />
            E-Shop Account
          </h1>

          <p>
            Access your wishlist, orders, shopping cart and exclusive offers.
          </p>
        </div>

        {/* Right Side */}
        <div className="auth-card">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FiMail />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FiLock />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
