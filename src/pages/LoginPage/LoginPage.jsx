// import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function LoginPage() {
  return (
    <>
      <PageTitle>If you have an account, log in</PageTitle>
      <LoginForm />
    </>
  );
}
