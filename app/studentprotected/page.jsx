"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { message } from "antd";

function StudentProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const [User, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!session || !session.user) return;

    const fetchStudentData = async () => {
      try {
        const response = await fetch("/api/RoleConnector", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: session.user.email }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }

        const data = await response.json();
        setUser(data.body);
        console.log("Student role data:", data.body);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, [session]);

  useEffect(() => {
    if (status === "loading") return;

    if (User && User.role !== "student") {
      message.info("Student access required");
      router.replace("/");
    }
  }, [User, session, status, router]);

  return User && User.role === "student" ? <>{children}</> : null;
}

export default StudentProtectedRoute;
