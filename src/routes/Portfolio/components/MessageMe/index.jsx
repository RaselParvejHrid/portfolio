import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import WaitDialog from "../../../../components/WaitDialog";
import { toast } from "react-toastify";

const MessageMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm();

  const [showWait, setShowWait] = useState(false);

  const sendEmail = async (formData) => {
    console.log(formData);
    setShowWait(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      );
      reset();
      toast.success("Message Sent!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.error(err);
      toast.error("Message not Sent!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setShowWait(false);
    }
  };
  return (
    <section id="message" className="container mx-auto p-16">
      <h1 className="text-center font-bold text-rich-black-fogra text-h4 mb-8">
        Send Me a Message
      </h1>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col justify-center max-w-xl mx-auto"
      >
        <input
          type="name"
          className="text-xl bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
          placeholder="Your Name"
          {...register("name", { required: "Name is required." })}
        />
        {formErrors.name && (
          <p className="mt-2 text-xs text-[#7E7E7E]">
            {formErrors.name.message}
          </p>
        )}
        <input
          type="email"
          className="text-xl bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
          placeholder="Your Email Address"
          {...register("email", { required: "Email is required." })}
        />
        {formErrors.email && (
          <p className="mt-2 text-xs text-[#7E7E7E]">
            {formErrors.email.message}
          </p>
        )}

        <textarea
          placeholder="Your Message"
          rows={5}
          className="text-xl bg-white mt-8 pl-6 pb-0 placeholder:text-[#B4B4B4] border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-[#B4B4B4] focus:ring-0"
          {...register("message", { required: "A Message is required." })}
        />

        {formErrors.message && (
          <p className="mt-2 text-xs text-[#7E7E7E]">
            {formErrors.message.message}
          </p>
        )}

        <button
          type="submit"
          className="mt-12 p-4 rounded-md mx-auto bg-forest-green text-white"
        >
          Send Message
        </button>
      </form>
      {showWait && <WaitDialog />}
    </section>
  );
};

export default MessageMe;
