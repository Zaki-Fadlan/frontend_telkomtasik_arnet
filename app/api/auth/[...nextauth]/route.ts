import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text", placeholder: "jsmith" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    // Logika untuk mencari pengguna berdasarkan kredensial yang diberikan
    const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
    // Contoh logika untuk mencari pengguna menggunakan API atau panggilan ke server
    // const res = await fetch('http://localhost:8000/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: credentials?.username,
    //     password: credentials?.password,
    //   }),
    // });
    // const user = await res.json();

    if (user) {
      return user;
    } else {
      return null;
    }
  },
});
export const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
