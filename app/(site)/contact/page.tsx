'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";

// Icons
import {
  HiOutlinePhone,
  HiMail,
  HiOutlineUser,
  HiOutlinePencil,
} from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";



export default function Contact() {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    fetch("/contact/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
  


  return (
    <section className="py-16 max-w-xl mx-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mx-auto pb-10">
          <h1 className="text-4xl font-bold text-black-800 sm:text-5xl mb-6 md:text-6xl dark:text-white pl-10">
            iletişim 👋🏼
          </h1>
          <p>
            dilerseniz sosyal medya linklerim üzerinden, dilerseniz aşağıda yer
            alan form üzerinden benimle iletişime geçebilirsiniz.
          </p>
        </div>
        <div className="px-6 py-8 mx-auto transition-shadow rounded-lg bg-zinc-50 hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiOutlineUser className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="name-icon"
                className=""
                placeholder="Furkan Beydemir"
                {...register("name", { required: true })}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email-address-icon"
                  className=""
                  placeholder="furkan@beydemir.dev"
                  {...register("email", { required: true })}
                />
              </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiOutlinePhone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone-icon"
                    placeholder="0544 444 44 44"
                    {...register("phone")}
                  />
                </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-3 flex items-center pl-3 pointer-events-none">
                <HiOutlinePencil className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <textarea
                placeholder="Mesajınız"
                rows={8}
                id="email-address-icon"
                {...register("message")}
              />
            </div>

            <div className="mt-4">
              <button type="submit" className="button-dark w-full text-sm" >
                Gönder
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center gap-6 max-w-xl mx-auto py-12">
          <Link
              href="https://www.linkedin.com/in/furkanbeydemir/"
              target={"_blank"}
              className="button-light h-10 w-10 sm:h-12  sm:w-12 rounded-full p-0 flex flex-col items-center"
          >
            <SlSocialLinkedin className="h-full text-xl sm:text-2xl" />
          </Link>

          <Link
              href="https://github.com/beydemirfurkan"
              target={"_blank"}
              className="button-light  h-10 w-10 sm:h-12  sm:w-12 rounded-full p-0 flex flex-col items-center"
          >
            <BsGithub className="h-full text-xl sm:text-2xl" />
          </Link>
          <Link
            href="https://www.instagram.com/furkanbeydemir/"
            target={"_blank"}
            className="button-light h-10 w-10  sm:h-12  sm:w-12 rounded-full p-0 flex flex-col items-center"
          >
            <AiOutlineInstagram className="h-full text-xl sm:text-2xl" />
          </Link>


        </div>
      </div>
    </section>
  );
}
