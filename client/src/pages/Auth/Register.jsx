import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FiUser, FiMail, FiLock} from "react-icons/fi";
import {toast} from "react-toastify";
import API from "../../services/api";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const {data} = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      toast.success("Registration Successful 🚀");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        {/* Left Side */}
        <div className="auth-banner">
          <span>Join E-Shop</span>

          <h1>
            Create Your
            <br />
            Account
          </h1>

          <p>
            Start shopping, save your wishlist, track orders and enjoy exclusive
            deals.
          </p>
        </div>

        {/* Right Side */}
        <div className="auth-card">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FiUser />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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

            <div className="input-group">
              <FiLock />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
