import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { fullname, email, password } = await req.json();
  console.log(fullname, email, password);

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: "Password must be at least 6 characters",
      },
      {
        status: 400,
      }
    );

  try {
    await connectDB();

    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );

    const hashPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      fullname,
      password: hashPassword,
    });

    const savedUser = await user.save();
    console.log(savedUser);

    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}