import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Username: '',
    Email: '',
    Phone: '',
    Password: '',
    cPassword: '',
    Address: '',
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
  
    const { FullName, Username, Email, Phone, Password, cPassword, Address } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,12}$/;
  
    if (!FullName || !Username || !Email || !Phone || !Password || !cPassword || !Address) {
      toast.error('Please Enter All Details');
      return;
    }
  
    if (!emailRegex.test(Email)) {
      document.querySelector('.Id-error').textContent = 'Invalid Email Id';
      return;
    } else {
      document.querySelector('.Id-error').textContent = '';
    }
  
    if (!passwordRegex.test(Password)) {
      document.querySelector('.password-error').textContent = 'Password is too weak';
      return;
    } else {
      document.querySelector('.password-error').textContent = '';
    }
  
    if (Password !== cPassword) {
      document.querySelector('.cpassword-error').textContent = 'Password does not match';
      return;
    }
  
    // Check for duplicate username
    if (
      Object.values(localStorage).some((user) => {
        const parsedUser = JSON.parse(user);
        return parsedUser.username === Username;
      })
    ) {
      document.querySelector('.uname-error').textContent = 'Username Already Exists';
      return;
    } else {
      document.querySelector('.uname-error').textContent = '';
    }
  
    // Check for duplicate email
    if (localStorage.getItem(Email)) {
      toast.warn('User Already Registered');
      return;
    }
  
    const userData = {
      name: FullName,
      username: Username,
      email: Email,
      phone: Phone,
      password: Password,
      address: Address,
    };
  
    localStorage.setItem(Email, JSON.stringify(userData));
    console.log(userData);
    toast.success('Registration Successful');
  };
  

  return (
    <div>
      <div className="sign-up flex justify-center">
        <form action="" className="flex flex-col border border-black p-5 m-12 mx-auto rounded-lg">
          <div className="heading text-2xl font-bold flex justify-center m-12 mx-auto">
            <h1>CREATE YOUR ACCOUNT</h1>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Full Name</label>
            </div>
            <div className="input flex flex-col">
              <input
                type="text"
                id="FullName"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                placeholder="Jack Ryan"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
            </div>
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
              <span className="uname-error text-red-700"></span>
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
          <div className="field flex flex-col m-5 mx-auto ">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="input">
              <input
                type="tel"
                id="Phone"
                name="Phone"
                minLength={10}
                maxLength={10}
                value={formData.Phone}
                onChange={handleChange}
                placeholder="xxx-xxx-xxxx"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
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
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Confirm Password</label>
            </div>
            <div className="input flex flex-col">
              <input
                type="password"
                id="cPassword"
                name="cPassword"
                value={formData.cPassword}
                onChange={handleChange}
                placeholder="********"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              />
              <span className="cpassword-error text-red-700"></span>
            </div>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="label text-[#393535] font-semibold text-lg">
              <label htmlFor="">Address</label>
            </div>
            <div className="textArea flex flex-col mx-auto">
              <textarea
                name="Address"
                id="Address"
                value={formData.Address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                className="border border-black p-2 w-[508px] m-2 mx-auto rounded"
              ></textarea>
            </div>
          </div>
          <div className="field flex flex-col m-5 mx-auto">
            <div className="registerBtn">
              <button
                className="bg-[#fcb941] p-5 w-[493px] rounded-md cursor-pointer font-semibold text-xl"
                onClick={handleSubmit}
              >
                SIGN UP
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
