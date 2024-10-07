'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_SERVICE } from "@/constants";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { fullname, email, subject, message } = data;
    const mailtoString = `mailto:${EMAIL_SERVICE}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${fullname}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoString;
  };

  return (
    <div className="max-w-[600px] mx-auto mt-10">
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Contact Form</h2>
            <p className="font-light tracking-wider mt-4 mb-6">
              Ada masalah teknis? Ingin memberikan umpan balik? Membutuhkan informasi? Beri tahu kami.
            </p>
          </div>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subjek</FormLabel>
                <FormControl>
                  <Input placeholder="Masuk Subjek" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pesan</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukan Pesan" {...field}></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm