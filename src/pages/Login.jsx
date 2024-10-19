import foodStockPhoto2 from "/assets/images/foodStockPhoto2.jpg";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = ({ className, ...props }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex min-h-[95.4vh]">
      {/* Left Side - Branding (hidden on md and smaller) */}
      <div
        className="hidden md:flex flex-1 bg-gray-100 text-black flex-col justify-between p-10 relative"
        style={{
          backgroundImage: `url(${foodStockPhoto2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Spacer to push content to the bottom */}
        <div className="flex-grow"></div>

        <p className="mt-4 text-sm text-black">
          Photo by{" "}
          <a href="https://unsplash.com/@calvinshelwell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            <u className="underline-offset-1">Calvin Shelwell</u>
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/vegetable-salad-on-white-ceramic-bowl-CW_Y16Kws20?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            <u className="underline-offset-1">Unsplash</u>
          </a>
        </p>
      </div>

      {/* Right Side - Sign In Form (full width on md and smaller) */}
      <LoginForm />
    </div>
  );
};

export default Login;
