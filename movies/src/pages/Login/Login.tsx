import styles from "./Login.module.css";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <Input
          type="text"
          placeholder="Username"
          autoComplete="off"
          username={true}
          width="25vw"
        ></Input>
        <Input
          type="text"
          placeholder="Password"
          autoComplete="off"
          password={true}
          width="25vw"
        ></Input>

        <Button
          type="primary"
          onClick={() => {
            dispatch(login());
            navigate("/graphs", { replace: true });
          }}
          width="200px"
        >
          Login
        </Button>
      </div>
      <div className={styles.footer}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/bravo.svg`}
          alt="logo"
          height="30"
        />
      </div>
    </div>
  );
};

export default Login;
