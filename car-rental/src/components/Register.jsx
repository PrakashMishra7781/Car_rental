import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }

    axios
      .post("http://localhost:3001/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Email already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="mb-4 text-2xl text-primary">Register</h2>
        <form onSubmit={handleSubmit} className="text-start">
          <div className="mb-4">
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Email Id</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(event) => setProfilePhoto(event.target.files[0])}
            />
          </div>
          <button type="submit" className="btn-primary py-2 px-4 rounded-md">
            Register
          </button>
        </form>

        <p className="mt-4">Already have an account?</p>
        <Link to="/login" className="btn-secondary py-2 px-4 mt-2 rounded-md">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
