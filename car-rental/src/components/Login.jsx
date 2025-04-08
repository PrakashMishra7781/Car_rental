import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((response) => {
        if (response.data.message === "Success") {
          const { token, user } = response.data;

          // Save token in cookies (expires in 1 hour)
          Cookies.set("authToken", token, { expires: 1, secure: true });
          Cookies.set("userEmail", user.email, { expires: 1 });

          alert("Login successful!");
          navigate("/");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while logging in. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="mb-4 text-2xl text-primary">Register</h2>
        <form onSubmit={handleSubmit} className="text-start">
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="block text-lg font-semibold"
            >
              Email Id
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              id="exampleInputEmail1"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="block text-lg font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4">Already have an account?</p>
        <Link
          to="/register"
          className="btn-secondary py-2 px-4 mt-2 rounded-md"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
