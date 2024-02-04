import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as authLogin } from ".../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, handleSubmit] = useForm();
  const [error, setError] = useState("");

  return <div>Login</div>;
}

export default Login;
