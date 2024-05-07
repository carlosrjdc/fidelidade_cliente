import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        token: { label: "token", type: "text"},
      },
      async authorize(credentials, req) {
        const response  = await axios.post(`http://localhost:4000/user/ver?token=${credentials?.token}`)
        console.log(response)
        // Add logic here to look up the user from the credentials supplied
        const user = response.data
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],

  
};

const handler = NextAuth({
  ...authOptions,
  callbacks:{

    async session({ session, user, token }) {
      if(token){
        session.user = token.user
        return session
      
      }
    },

    async jwt({token, user}) {
      user && (token.user = user.user)
      return token
    }

  },
  pages: {
    signIn: "/",
    
  },
});

export { handler as GET, handler as POST };
