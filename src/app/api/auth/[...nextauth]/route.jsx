import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { cookies } from 'next/headers'
import { apiUrl } from "@/app/config/constant";

async function login(credentials) {
  try {
    // Replace this with your actual API endpoint
    const formData = new FormData();
                formData.append("user_email", credentials.email);
                formData.append("user_pass", credentials.password);
    const response = await fetch(`${apiUrl}/login.php`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
     //console.log(data)
     // cookies().set('tok',data.token , { secure: true })
      return data; // assuming your API response contains user information
    } else {
      throw new Error("Authentication failed1");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {

        try 
        {
        const user = await login(credentials);
       // const user = { id: 1, user_name: 'J Smith', user_email: 'jsmith@example.com' };
      console.log("Authorize function userssss:", user);
        if (!user.error) {
          const loggeinUser = {
            email: user.user_email,
            user_no: user.user_no,
            name: user.user_name,
            id: user.id,
          };
         console.log("Authorize ");
         return loggeinUser

          // return user;
        } else {
         console.log("Authorize functionffffffffff");
           return null;
        }
      } catch (error) {
       console.log('Something went wrong',error);
    }


      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Add your custom session properties here
    jwt: true, // Enable JSON Web Token (JWT) support for the session
  },


  callbacks: {
    async jwt({ token, user, account, profile, isNewUser,trigger }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (trigger === "update") {
        if (user) {
          token.email = user.email
          token.name = user.name
          token.user_no = user.user_no
          token.id = user.id
        }
        return token;
      }
      
      if (user) {
        token.email = user.email
        token.name = user.name
        token.user_no = user.user_no
        token.id = user.id
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if ( token ) {
        session.user.email = token.email
        session.user.name = token.name
        session.user.user_no = token.user_no
        session.user.id = token.id
      }

      return session
    }
  },
  
  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
