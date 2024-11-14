"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { message } from "antd";

function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      message.info("You need to login to access this page");
      router.replace("/");
    } else {
      console.log("User is authenticated");
    }
  }, [session, status, router]);

  return session ? <>{children}</> : null;
}

export default ProtectedRoute;
