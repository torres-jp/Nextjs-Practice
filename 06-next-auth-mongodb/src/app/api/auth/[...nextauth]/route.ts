import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*******",
        },
      },
      authorize(credentials, req) {
        const user = {
          id: "1",
          fullname: "jhon",
          email: "jhon@gmail.com",
        };

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
