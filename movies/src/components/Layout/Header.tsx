import styles from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/authSlice";
import Button from "../UI/Button/Button";

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <a
        href="https://bravosystems.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
          alt="logo"
          height="35"
        />
      </a>

      <ul className={styles.navigation}>
        <li>
          <NavLink
            end
            to="/lucene"
            style={({ isActive }) => ({
              color: isActive ? "#CC0B30" : "#ffffff",
              fontWeight: "bold",
            })}
          >
            Lucene Research
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/graphs"
            end
            style={({ isActive }) => ({
              color: isActive ? "#CC0B30" : "#ffffff",
              fontWeight: "bold",
            })}
          >
            Graph Libraries
          </NavLink>
        </li>

        {!isAuthenticated && (
          <li>
            <Link to="/login" className={styles.login}>
              Login
            </Link>
          </li>
        )}

        {isAuthenticated && (
          <li>
            <Button
              type="default"
              onClick={() => {
                dispatch(logout());
                navigate("/lucene", { replace: true });
              }}
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
