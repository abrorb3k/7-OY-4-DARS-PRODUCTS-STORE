import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username.length > 3 || !email || !password) {
      setError("Iltimos, barcha maydonlarni to'gri to'ldiring!");
      return;
    }

    

    const userData = { username, email, password };
    localStorage.setItem("user", JSON.stringify(userData)); 

    navigate("/login");
  };



  return (
    <div>
      <div className="flex flex-col p-5 rounded-3xl border-2 mx-auto w-[500px] border-gray-700 mt-10">
        <h1 className="mb-8 font-bold text-3xl mx-auto">Register</h1>
        <form
          className="flex flex-col justify-center items-center gap-3"
          onSubmit={handleRegister}
        >
          <input
            className="border-2 w-[90%] rounded-3xl p-2 border-gray-700"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Foydalanuvchi ismi"
          />
          <input
            className="border-2 w-[90%] rounded-3xl p-2 border-gray-700"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="border-2 w-[90%] rounded-3xl p-2 border-gray-700"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="w-[90%] bg-blue-700 p-2 rounded-3xl cursor-pointer hover:bg-blue-800 duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-700 mt-3 mx-auto">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
