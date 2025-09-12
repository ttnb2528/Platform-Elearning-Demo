import type React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex relative">
      {/* Back Home */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="text-lg text-accent hover:underline transition-all duration-200"
        >
          ← Về trang chủ
        </Link>
      </div>

      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">{title}</h2>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div> */}
          {children}
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-accent/20 via-muted/30 to-accent/10 items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-64 h-64 mx-auto mb-8 bg-accent/20 rounded-full flex items-center justify-center">
            <Image
              src="/images/onyx-logo.webp"
              alt="Children learning online"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Học tập vui nhộn cùng ONYX
          </h3>
          <p className="text-muted-foreground">
            Tham gia cộng đồng học tập trực tuyến lớn nhất dành cho trẻ em
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
