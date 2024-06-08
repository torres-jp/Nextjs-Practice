"use client";
import { useForm } from "react-hook-form";

function HomePage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="contenedor">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirmPass">Confirm Password</label>
        <input type="password" id="confirmPass" name="confirmPass" />

        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="plan">Plan</label>
        <select name="plan" id="plan">
          <option value="free">Free</option>
          <option value="basic">Basic</option>
          <option value="medium">Medium</option>
          <option value="prime">Prime</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
