"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useRef, useEffect } from "react";
import { redirect } from "next/navigation";
import {
  Card,
  CardBody,
  Input,
  Button,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
export default function LoginPage() {
  const userName = useRef("");
  const pass = useRef("");
  const { data: session, status } = useSession();
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  const [isVisible, setIsVisible] = React.useState(false);

  if (status === "authenticated") {
    return redirect("/");
  }
  if (status === "loading") {
    return null;
  }
  if (status === "unauthenticated") {
    return (
      <div
        className={
          "flex flex-col justify-center items-center h-screen bg-red-600 gap-1 shadow-lg"
        }
      >
        <Card className="max-w-[400px] min-w-[350px] md:min-w-[350px]">
          <CardHeader className="flex flex-row justify-center items-center">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Telkom Tasikmalaya</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-y-5">
            <Input
              type="text"
              variant="bordered"
              label="NIK"
              size="sm"
              onChange={(e) => (userName.current = e.target.value)}
            />
            <Input
              label="Password"
              variant="bordered"
              size="sm"
              onChange={(e) => (pass.current = e.target.value)}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              // className="max-w-xs"
            />
            <Button
              className="bg-red-600 shadow-md text-white font-semibold"
              onClick={onSubmit}
            >
              Login
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

// export default LoginPage;
