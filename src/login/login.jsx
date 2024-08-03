import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate()

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.username.length > 0 && formData.password.length > 4) {
      let response = await fetch("https://baf62fea17c269db.mokky.dev/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsonData = await response.json()

      if(response.ok){
        navigate("/home")
        localStorage.setItem("token", jsonData.token)
        toast.success("Succes!")
      }else{
        toast.error(jsonData.message)
      }

    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          boxShadow: "0px 0px 14px #000",
          borderRadius: "30px",
          padding: "40px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "20px",
            color: "#5795f7",
          }}
        >
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullname"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "20px",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="username"
              id="fullname"
              style={{
                width: "100%",
                display: "block",
                marginBottom: "20px",
                fontSize: "20px",
                borderRadius: "8px",
                outline: 0,
                border: "1px solid #5795f7",
                padding: "5px 15px",
              }}
              required
              onChange={onChangeInput}
              placeholder="Alex Smith"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "20px",
              }}
            >
              Full Name
            </label>
            <input
              type="password"
              name="password"
              id="password"
              style={{
                width: "100%",
                display: "block",
                marginBottom: "20px",
                fontSize: "20px",
                borderRadius: "8px",
                outline: 0,
                border: "1px solid #5795f7",
                padding: "5px 15px",
              }}
              required
              onChange={onChangeInput}
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            style={{
              display: "block",
              marginBottom: "20px",
              cursor: "pointer",
              width: "100%",
              background: "#5795f7",
              color: "#fff",
              fontSize: "20px",
              borderRadius: "8px",
              outline: 0,
              border: "1px solid #5795f7",
              padding: "10px 15px",
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
