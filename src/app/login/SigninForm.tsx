"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type TInputs = {
  email: string;
  password: string;
};

const demoUser = {
  email: "user@gmail.com",
  password: "123456",
};
const demoAdmin = {
  email: "admin@gmail.com",
  password: "123456",
};

const SigninForm = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const form = useForm<TInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: TInputs) => {
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="p-8 bg-gray-200 min-w-[400px]">
      <CardHeader>
        <h1 className="text-2xl font-semibold mb-5">Sign in</h1>
        {params.get("error") && (
          <div className="text-red-500">
            {params.get("error") === "CredentialsSignin"
              ? "Invalid email or password"
              : params.get("error")}
          </div>
        )}
        {params.get("success") && (
          <div className="text-green-500">{params.get("success")}</div>
        )}
      </CardHeader>
      <CardContent className="w-full">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />
            <FormInput
              control={control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button
              className="bg-sky-500 w-full hover:bg-sky-600 my-5"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </form>
        </Form>

        <div>
          <Button className="w-full" onClick={() => signIn("google")}>
            Sign in with google
          </Button>
        </div>

        <div className="mt-3">
          Need an account?{" "}
          <Link
            className="text-sky-500 font-semibold"
            href={`/register?callbackUrl=${callbackUrl}`}
          >
            Register
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <Button
            variant="outline"
            onClick={() => signIn("credentials", demoUser)}
          >
            Demo User
          </Button>
          <Button
            variant="outline"
            onClick={() => signIn("credentials", demoAdmin)}
          >
            Demo Admin
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default SigninForm;
