// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// External Libraries
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";

// Services
import { SignIn } from "../../Service/auth.service";

// Styles
import styles from "./LogIn.module.css";
import "react-toastify/dist/ReactToastify.css";

// Assets
import eye from "../../assets/LogIn/Image/eye.svg";
import hilo from "../../assets/LogIn/Image/logo(horizontal).svg";
import mail from "../../assets/LogIn/Image/mail.svg";

function LogIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get("token")) {
      navigate("/home");
    }
  }, [navigate]);

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const reqBody = {
      email,
      password,
    };
    const res = await SignIn(reqBody);
    if (res.status === 200) {
      // Disucss with team
      toast.success("Login Successful");
      const token = res.data.token; // Disucss with team
      const cookies = new Cookies();
      cookies.set("token", token, { path: "/" });

      navigate("/dashboard");
    } else {
      toast.error(res.data.message); // Disucss with team
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.LogInWrapper}>
        <div className={styles.HiloDesigns}>
          <img src={hilo} />
        </div>

        <div className={styles.LogIn}>
          <div>LOGIN</div>
          <span>Please enter your e-mail and password</span>
        </div>

        <form className={styles.formWrapper} onSubmit={onSubmitHandle}>
          <div>
            <input required type="email" placeholder="Email id" id="email" />
            <img src={mail} />
          </div>
          <div>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={styles.eye}
            >
              <img src={eye} />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LogIn;
