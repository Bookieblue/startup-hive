import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from '../ui/input'
import Button from "../ui/button";
import Link from "next/link";

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email('Incorrect email address'),
    password: z.string().min(1, "Password is required").min(8, "Password must have 8 characters"),
  })


const LoginForm = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })

      const onSubmit = (values: z.infer<typeof FormSchema>) =>{
            console.log('submitted successfully')
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Email</FormLabel>
            <FormControl>
              <Input placeholder="eg. yourname@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <p className="medium-16 mt-5 md:mt-5">
              Forgot password{" "}
              <Link href="./reset-password" className="text-lightred-50">
                Reset here
              </Link>
        </p>
     <Button type="submit" title="Submit Now" variant="btn_lightred" />
    </form>
  </Form>
  )
}

export default LoginForm