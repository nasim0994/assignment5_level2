"use client";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginZodValidation } from "./loginValidation";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const form = useForm({ resolver: zodResolver(loginZodValidation) });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <label>Email</label>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  value={field.value || ""}
                  className="rounded-full placeholder:text-gray-400 placeholder:text-[13px]"
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <label>Password</label>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPass ? 'text' : 'password'}
                    {...field}
                    value={field.value || ""}
                    className="rounded-full placeholder:text-gray-400 placeholder:text-[13px]"
                    placeholder="*********"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-3 right-3 cursor-pointer"
                  >
                    {
                        showPass ? <AiFillEyeInvisible className="text-neutral-content" /> : <AiFillEye className="text-neutral-content" />
                    }
                  </span>
                </div>
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="w-3.5 h-3.5" />
            <label
              htmlFor="remember"
              className="text-[13px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-neutral-content hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-primary text-base-100"
        >
          Sign In
        </Button>

        <div className="flex flex-col gap-3 mt-1">
          <p className="text-sm text-center text-neutral">Or Sign In with</p>

          <div className="flex item-center justify-center gap-2">
            <button className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center">
              <FcGoogle className="text-xl" />
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center">
              <ImFacebook className="text-lg text-blue-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center text-xs gap-1">
          <p className="text-neutral-content">Already have an account?</p>
          <Link href="/register" className="text-neutral font-semibold">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}
