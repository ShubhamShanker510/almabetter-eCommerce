import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { Username, Email, Password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check for empty fields
    if (!Username || !Email || !Password) {
      toast.error("Please fill out all fields.");
      return;
    }
  
    // Validate email format
    if (!emailRegex.test(Email)) {
      toast.error("Invalid Email format.");
      return;
    }
  
    // Retrieve user details from localStorage
    const userData = JSON.parse(localStorage.getItem(Email));
  
    // Check if the user exists
    if (!userData) {
      toast.error("Invalid Credentials");
      return;
    }
  
    // Validate password
    if (userData.password !== Password) {
      toast.error("Invalid Credentials");
      return;
    }
  
    // Validate username
    if (userData.username !== Username) {
      toast.error("Invalid Credentials");
      return;
    }
  
    // Set the current user in localStorage
    localStorage.setItem("currentUser", Username);
  
    // Successful login
    toast.success("Login Successful!");
    console.log("Logged in user:", userData);
  };
  

  return (
    <div>
      <div className="login flex justify-center">
        <form
          action=""
          className="flex flex-col border border-black p-5 m-12 mx-auto rounded-lg"
        >
          <div className="heading text-2xl font-bold flex justify-center m-12 mx-auto">
            <h1>LOGIN</h1>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Username</label>
            </div>
            <div className="input flex flex-col">
              <input
                type="text"
                id="Username"
                name="Username"
                value={formData.Username}
                onChange={handleChange}
                placeholder="jack_ryan"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
            </div>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Email</label>
            </div>
            <div className="input flex flex-col">
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="jackryan@gmail.com"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
              <span className="Id-error text-red-700"></span>
            </div>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Password</label>
            </div>
            <div className="input flex flex-col">
              <input
                type="password"
                id="Password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="*********"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
              <span className="password-error text-red-700"></span>
            </div>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="loginBtn">
              <button
                className="bg-[#fcb941] p-5 w-[493px] rounded-md cursor-pointer font-semibold text-xl"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
