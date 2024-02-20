"use client";

import { Button } from "@/components/ui/button";
import { SignUpFields, SignUpValidationSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-separator";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoogleButton, GithubButton } from "../buttons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Route } from "@/../routes";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFields>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidationSchema),
  });

  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackUrl") ?? Route.MAIN;
  const onSubmit: SubmitHandler<SignUpFields> = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex w-full grow items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-full min-w-[300px] bg-light-primary p-5 dark:bg-dark-primary sm:h-fit sm:w-fit sm:rounded-2xl"
      >
        <h1 className="mb-5 text-center text-2xl font-bold">Sign up</h1>
        <div className="my-3">
          <div>
            <Input {...register("email")} placeholder="Email" />
            <span className="ml-5 text-xs text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Input
              {...register("name")}
              placeholder="Name"
              autoComplete="name"
            />
            <span className="ml-5 text-xs text-red-500">
              {errors.name?.message}
            </span>
          </div>
          <div>
            <Input {...register("password")} placeholder="Email" />
            <span className="ml-5 text-xs text-red-500">
              {errors.password?.message}
            </span>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <Separator className="my-5" />
        <div className="space-y-2">
          <GoogleButton callbackUrl={callbackURL} />
          <GithubButton callbackUrl={callbackURL} />
        </div>
        <div className="mt-3 text-sm text-secondary">
          {"Have an account already ? "}
          <Link href={Route.SIGN_IN} className="cursor-pointer text-blue-500">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
