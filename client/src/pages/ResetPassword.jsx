import {
  Link,
  Form,
  redirect,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const searchParams = new URLSearchParams(location.search);

export const action = async ({ request }) => {
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const formData = await request.formData();
  const { password } = Object.fromEntries(formData);
  const data = { token, email, password };
  console.log(password);
  console.log(token);
  console.log(email);

  try {
    await customFetch.post("/auth/reset-password", data);
    toast.success("Password reset successfully, login");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Reset Password</h4>
        <FormRow type="password" name="password" labelText="new password" />

        <SubmitBtn />
      </Form>
    </Wrapper>
  );
};
export default ResetPassword;
