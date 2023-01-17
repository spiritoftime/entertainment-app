import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classes from "./login.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please type in an email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please type a valid email"
    ),
  password: Yup.string()
    .required("Please type a password")
    .min(6, "Password length should be at least 6 characters")
    .max(12, "Password cannot exceed more than 12 characters"),

  cPassword: Yup.string()
    .min(6, "Password length should be at least 6 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const submitHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="bg-darkBlue min-h-screen flex justify-center items-center">
      <div
        className={`bg-login w-[min(320px,_80%)] flex flex-col rounded-lg  h-[370px]`}
      >
        <p className="text-white font-light text-xl pl-6 py-6">Sign Up</p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="text-white text-xs font-light w-[min(279px,_90%)] h-[200px]  flex flex-col gap-4 pl-6"
        >
          <input
            {...register("email")}
            className={` border-b-gray-500 border-b-2 bg-login`}
            type="email"
            placeholder="Email address"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="text-rose-500">{message}</p>}
          />

          <input
            className={`border-b-gray-500 border-b-2 bg-login`}
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="text-rose-500">{message}</p>}
          />

          <input
            className={` border-b-gray-500 border-b-2 bg-login`}
            type="Password"
            placeholder="Repeat Password"
            {...register("cPassword")}
          />
          <ErrorMessage
            errors={errors}
            name="cPassword"
            render={({ message }) => <p className="text-rose-500">{message}</p>}
          />

          <button
            className={`cursor-pointer mt-auto p-4 bg-rose-600 rounded-md`}
            type="submit"
          >
            Create an account
          </button>
        </form>
        <div className="flex gap-2 mt-16  text-xs mx-auto">
          <p className=" text-gray-500">Don't have an account?</p>
          <a
            href="/signup"
            className="cursor-pointer text-rose-500 font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
