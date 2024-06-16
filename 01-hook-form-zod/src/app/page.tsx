"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { userSchema, mappedPlans } from "@/validation/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
  weight: string;
  plan: string;
  dateOfBirth: string;
};
function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  ));

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <label htmlFor="confirmPass">Confirm Password</label>
        <input type="password" id="confirmPass" {...register("confirmPass")} />
        {errors.confirmPass?.message && <p>{errors.confirmPass?.message}</p>}

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dayOfBirth" {...register("dateOfBirth")} />
        {errors.dateOfBirth?.message && <p>{errors.dateOfBirth?.message}</p>}

        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" {...register("weight")} />
        {errors.weight?.message && <p>{errors.weight?.message}</p>}

        <label htmlFor="plan">Plan</label>
        <select {...register("plan")} id="plan">
          {plansOptions}
        </select>
        {errors.plan?.message && <p>{errors.plan?.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
