import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Register.scss";

const RegisterPage = () => {
  

  

  

  const navigate = useNavigate()

  

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" >
          <input
            placeholder="First Name"
            name="firstName"
            
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"

            required
          />
          <input
            placeholder="Password"
            name="password"

            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"

            type="password"
            required
          />

         

          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          
            <img
              
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          
          <button type="submit" >REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;