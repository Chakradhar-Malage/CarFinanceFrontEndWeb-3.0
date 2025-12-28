
"use client"; 

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to SignIn page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/SignIn");
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Logo */}
      <Image
        src="/images/logo.jpg"
        alt="Logo"
        width={192} // Equivalent to Tailwind's w-48 (12rem = 192px)
        height={192} // Equivalent to Tailwind's h-48
        className="w-48 h-48 mb-6"
      />

      {/* Flash Screen Text */}
      <h2 className="text-lg font-bold text-gray-600 text-center">
        Track And Monitor Your
        <br />
        Expenses
      </h2>

      {/* Navigation Links */}
      <nav className="mt-8 space-y-4">
        <p>WELCOME</p>
      </nav>
    </div>
  );
}
