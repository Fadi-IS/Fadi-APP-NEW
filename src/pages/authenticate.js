import LogInForm from "components/login-form/login-form";
import RegisterForm from "components/register-form/register-form";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "utils/context";

function Authenticate() {
  const [registerFormToggled, setRegisterFormToggled] = useState(false);
  const { user, loading } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    !loading && user && navigate("/");
  }, [loading, user]);

  return registerFormToggled ? (
    <div className="authenticate">
      <RegisterForm />
      <p>
        Already have an account?{' '}
        <b
          className="authenticate__anchor"
          onClick={() => setRegisterFormToggled(false)}
        >
          Login
        </b>
      </p>
    </div>
  ) : (
    <div className="authenticate">
      <LogInForm />
      <p>
        Don't have an account?{" "}
        <b
          onClick={() => setRegisterMode(true)}
          className="authenticate__anchor"
        >
          Register
        </b>
      </p>
    </div>
  );
}
export default Authenticate;
