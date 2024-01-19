import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from '../ui/input'
import Button from "../ui/button";


const FormSchema = z.object({
    otp: z.number().min(1, "OTP is required").max(6),
  })

const ConfirmOtpForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })

      const onSubmit = (values: z.infer<typeof FormSchema>) =>{

      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
      <FormField
        control={form.control}
        name="otp"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your OTP</FormLabel>
            <FormControl>
              <Input placeholder="910276" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    <Button type="submit" title="Submit Now" variant="btn_lightred" />
    </form>
  </Form>
  )
}

export default ConfirmOtpForm