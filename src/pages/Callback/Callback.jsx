import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const [status, setStatus] = useState("Autenticando...");
  const navigate = useNavigate();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      setStatus("No se recibió código de Google.");
      return;
    }

    const fetchToken = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/google/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        if (!response.ok) throw new Error();
        const data = await response.json();

      
        localStorage.setItem("token", data.token);

       
        const payload = JSON.parse(atob(data.token.split(".")[1]));
        localStorage.setItem("user", JSON.stringify(payload));

       
        if (payload.rol === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } catch (err) {
        setStatus("Error al iniciar sesión. Intenta de nuevo.");
      }
    };

    fetchToken();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>{status}</p>
    </div>
  );
}

export default Callback;