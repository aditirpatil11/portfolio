import { useForm, ValidationError } from "@formspree/react";
import { LuSend } from "react-icons/lu";
import FadeContent from "../Common/FadeContent";

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  return (
    <section
      id="contact"
      className="bg-linear-to-br from-primary/30 via-black to-primary/30 px-4 lg:px-20 py-24 flex flex-col items-center text-white"
    >
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        delay={500}
      >
        <h1 className="z-20 text-3xl lg:text-5xl mb-4 text-center">
          Contact Me
        </h1>
        <p className="z-20 text-sm lg:text-lg text-zinc-400 text-center mb-10 max-w-2xl">
          Have a question, collaboration idea, or just want to connect?{" "}
          <br className="hidden lg:flex" /> Drop me a message below.
        </p>

      {state.succeeded ? (
        <p className="text-green-400 text-lg mt-6">
          ✅ Your message has been sent! I'll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-black/50 border border-zinc-700 rounded-xl px-6 py-8 backdrop-blur-lg flex flex-col gap-6"
        >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Write your message here..."
                rows="5"
                className="bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="cursor-pointer text-sm lg:text-base text-black bg-white hover:text-purple-800 hover:scale-95 border-2 border-white hover:border-purple-800 rounded-full flex items-center justify-center gap-3 px-6 py-3 transition-all duration-300"
            >
              Send Message <LuSend size={20} />
            </button>
        </form>
      )}

      </FadeContent>
    </section>
  );
};

export default Contact;
