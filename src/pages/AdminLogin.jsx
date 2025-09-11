import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send login request
      const res = await axios.post(
        "http://localhost:3000/api/admin/login",
        data
      );

      // Save token in localStorage
      localStorage.setItem("cartezAdminToken", res.data.token);

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.log(error);
    }
  };

  return (
    <div className="items-center justify-center flex bg-white shadow-lg w-[100vw] h-[100vh] fixed top-0 left-0 z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset bg-base-200 border-base-300 rounded-box w-[90vw] md:w-[50vw] border p-4"
      >
        <legend className="fieldset-legend text-3xl">Admin Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          {...register("email", { required: "Admin name is required" })}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          {...register("password", { required: "Admin name is required" })}
        />

        <button className="btn btn-neutral mt-4" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
