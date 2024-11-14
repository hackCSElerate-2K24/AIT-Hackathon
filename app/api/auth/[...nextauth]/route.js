import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../models/User";
import connectDB from "../../../../util/DB";
import bcrypt from "bcrypt"; // Import bcrypt

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: 'openid email profile',
      profile(profile) {
        let role = 'student'; 
        if (profile.email === 'romir.b@ahduni.edu.in') {
          role = 'admin';
        }
        console.log(role);
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          image: profile.picture,
          role: role,
        };
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { email, name } = user;
        try {
          await connectDB();

          // Check if user already exists in the database
          const userExists = await User.findOne({ email });

          // If user doesn't exist, create a new one without password
          if (!userExists) {
            const newUser = new User({
              email,
              name,
              role: user.role,
              provider: "google", // Track as Google sign-in user
            });
            await newUser.save();
          }

          return true; // Successful sign-in
        } catch (error) {
          console.log("Error saving user:", error);
          return false; // Failed sign-in due to error
        }
      }

      return true; // For other providers, continue sign-in
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
