import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (form.name === "") {
      err.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      err.email = "Invalid email";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      err.phone = "Phone must be 10 digits";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>React Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "error-border" : ""}
          />
          <span className="error">{errors.name}</span>

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "error-border" : ""}
          />
          <span className="error">{errors.email}</span>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "error-border" : ""}
          />
          <span className="error">{errors.phone}</span>

          <button type="submit">Register</button>

        </form>

        <p className="success">{success}</p>
      </div>
    </div>
  );
}

export default App;