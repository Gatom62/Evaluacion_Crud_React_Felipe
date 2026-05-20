import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USUARIO_MOCK = {
  email: "20240046@gmail.com",
  password: "123",
  usuario: { id: "1", name: "Felipe", email: "20240046@gmail.com" },
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    setLoading(true);

    if (!email.trim() || !password) {
      setError("Por favor completa email y contraseña.");
      return;
    }

    try {
      await new Promise((r) => setTimeout(r, 600));

      if (
        form.email === USUARIO_MOCK.email &&
        form.password === USUARIO_MOCK.password
      ) {
        localStorage.setItem("token", "token-mock-123");
        localStorage.setItem("usuario", JSON.stringify(USUARIO_MOCK.usuario));
        navigate("/mensajes");
      }
    } catch (err) {
      setError(setError(err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen by-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md  w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Iniciar sesión
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Ingresa tus credenciales para continuar
        </p>
        {error && (
          <div className="bg-red-800 border boder border-red-200 text-red-700 rounded-lg px-4 py-3 mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo eléctronico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
              className="w-full boder border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="********"
              className="w-full boder border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-300 text-white font-medium rounded-lg py-2 text-sm transition-colors"
          >
            {loading ? "Ingresando ..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
