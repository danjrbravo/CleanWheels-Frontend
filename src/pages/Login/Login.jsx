import loginImg from '../../assets/bluehellcat.jpg'
import Navbar from '../../components/navbar/Navbar'
import './Login.css'
import googleLogo from "../../assets/google_icon.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
  localStorage.setItem("token", "mock-token");
  localStorage.setItem("user", JSON.stringify({
    id: 1,
    nombre: "Nicol",
    email: "nicol@gmail.com",
    rol: "cliente"
  }));
  navigate("/dashboard");
};

  return (
    <>
      <Navbar />
      <div className="login_container">
        <div className="img_container">
          <img src={loginImg} alt="Login Image" className="login_img" />
        </div>
        <div className="aouth_container">
          <h1 className='login_title'>Bienvenido :D</h1>
          <p>El mejor servicio para tu vehiculo lo puedes encontrar aqui, para poder acceder a nuestros servicios Inicia sesion con tu cuenta de google.</p>
          <button className="login_btn" onClick={handleGoogleLogin}>
            <img src={googleLogo} alt="Google Logo" className="google_icon_fa" />
            <span>Continuar con Google</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;