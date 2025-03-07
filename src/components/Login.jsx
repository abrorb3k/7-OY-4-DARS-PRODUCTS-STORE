import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/");
    } else {
      setError("Ism yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="gap-3 flex flex-col p-5 rounded-3xl border-2 mx-auto w-[500px] border-gray-700 mt-10">
      <form className="gap-3 flex flex-col" onSubmit={handleLogin}>
        <input
          className="border-2 w-[90%] rounded-3xl p-2 border-gray-700"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Foydalanuvchi nomi"
        />
        <input
          className="border-2 w-[90%] rounded-3xl p-2 border-gray-700"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
        />
        <button
          className="w-[90%] bg-blue-700 p-2 rounded-3xl cursor-pointer hover:bg-blue-800 duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Login;
