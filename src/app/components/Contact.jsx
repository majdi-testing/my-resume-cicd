// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, Phone, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react"; // 🔴 ADDED

const Contact = () => {
  const [secondsLeft, setSecondsLeft] = useState(5);

 // 🔴 ADDED: popup state
  const [showPopup, setShowPopup] = useState(false);

  // 🔴 ADDED: form submit handler
  const handleSubmit = () => {
    // small delay to ensure formsubmit request is sent
    setShowPopup(true);
    setTimeout(() => {
      

      // 🔴 ADDED: WhatsApp auto open
      window.open(
        "https://wa.me/918789569240?text=Hi, I just submitted the contact form on your website 🙂",
        "_blank"
      );
    }, 4090);
  };



  // popup whatsapp open 

const openWhatsApp = () => {
  window.open(
    "https://wa.me/918789569240?text=Hi, I just submitted the contact form on your website 🙂",
    "_blank"
  );
};


//count down for autoclose popup

useEffect(() => {
  if (!showPopup) return;

  setSecondsLeft(5);

  const interval = setInterval(() => {
    setSecondsLeft((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        setShowPopup(false);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [showPopup]);


  return (
    <section id="contact" className="py-24 px-6 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact <span className="text-green-400">Me</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-light">
            Get in touch with me for any queries or opportunities
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div className="space-y-6"> isko replace kiya form se */}
            {/* CONTACT FORM */}
          <form
            action="https://formsubmit.co/asifkhan.fast.05@gmail.com"
            method="POST"
            target="hidden_iframe" // 🔴 ADDED: prevent page reload
            onSubmit={handleSubmit} // 🔴 ADDED
            className="space-y-6"
          >
            {/* 🔒 Important hidden configs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Message 🚀"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for contacting me! I will reply soon."
            /> 
            {/* 🔴 ADDED: Invisible honeypot spam filter */}
            <input type="text" name="_honey" className="hidden" />

            {/* 🔴 ADDED: stop redirect */}
            <input type="hidden" name="_next" value="" />
            {/* end line */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-white font-semibold block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name" // 🔴 ADDED (required by FormSubmit)
                required
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-[#0f172a] border-2 border-green-400/30 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white font-semibold block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email" // 🔴 ADDED
                required
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-[#0f172a] border-2 border-green-400/30 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
  <label htmlFor="phone" className="text-white font-semibold block">
    Mobile Number
  </label>
  <input
    type="tel"
    name="phone"          // 🔴 IMPORTANT
    required
    id="phone"
    placeholder="Enter your mobile number"
    className="w-full px-6 py-4 bg-[#0f172a] border-2 border-green-400/30 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
  />
</div>


              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-semibold block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject" // 🔴 ADDED
                required
                  id="subject"
                  placeholder="Enter subject"
                  className="w-full px-6 py-4 bg-[#0f172a] border-2 border-green-400/30 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-semibold block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // 🔴 ADDED
                required
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-6 py-4 bg-[#0f172a] border-2 border-green-400/30 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-[#0f172a] py-3 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-400/50">
                Send Message
              </button>
            </form>

            {/* 🔴 ADDED: hidden iframe (NO page reload) */}
          <iframe name="hidden_iframe" className="hidden"></iframe>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-[#0f172a] border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-[#0f172a]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-white mb-3">Email Me</h3>
                      <p className="text-gray-400 break-words font-light">mdmajdi05@gmail.com</p>
                      {/* <p className="text-gray-400 font-light">contact@khaleeque.dev</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-[#0f172a] border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-[#0f172a]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Call Me</h3>
                      <p className="text-gray-400 font-light">+91 87895 69240</p>
                      {/* <p className="text-gray-400 font-light">+91 98765 43210</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-[#0f172a] border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-[#0f172a]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Visit Me</h3>
                      {/* <p className="text-gray-400 font-light">123 Tech Street, Digital City</p> */}
                      <p className="text-gray-400 font-light">New Delhi, India - </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================= THANK YOU POPUP ================= */}
    {showPopup && (
  <>
    <style>
      {`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(.85) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes checkIn {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          70% { transform: scale(1.3) rotate(0); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 25px rgba(74,222,128,.4); }
          50% { box-shadow: 0 0 50px rgba(74,222,128,.8); }
        }
        @keyframes dot {
          0% { opacity: .2 }
          20% { opacity: 1 }
          100% { opacity: .2 }
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(120px) rotate(360deg); opacity: 0; }
        }
      `}
    </style>

    {/* BACKDROP */}
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

      {/* CONFETTI */}
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: "20%",
            animation: `confetti 1.8s ease-out ${i * 0.05}s forwards`
          }}
        />
      ))}

      {/* MODAL */}
      <div
        className="relative w-[90%] max-w-md rounded-3xl bg-[#0b1220] px-8 py-9 text-center
        border border-green-400/30 shadow-2xl shadow-green-400/40"
        style={{ animation: "modalIn .4s ease-out" }}
      >
        {/* CLOSE */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full
          bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
          transition flex items-center justify-center"
        >
          ✕
        </button>

        {/* SUCCESS ICON */}
        <div
          className="mx-auto mb-6 w-20 h-20 rounded-full
          bg-gradient-to-br from-green-400 to-emerald-500
          flex items-center justify-center"
          style={{ animation: "checkIn .5s ease-out, glow 2s infinite" }}
        >
          <svg
            className="w-10 h-10 text-[#0b1220]"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-3xl font-extrabold text-white mb-1">
          Message Sent
        </h3>

        <p className="text-green-400 font-semibold mb-4">
          Thanks for reaching out
          <span className="inline-flex ml-1">
            <span style={{ animation: "dot 1.4s infinite" }}>.</span>
            <span style={{ animation: "dot 1.4s infinite .2s" }}>.</span>
            <span style={{ animation: "dot 1.4s infinite .4s" }}>.</span>
          </span>
        </p>

        <p className="text-gray-400 mb-8 leading-relaxed">
          I’ve received your message and will get back to you shortly.
        </p>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={openWhatsApp}
          className="w-full py-3 rounded-xl font-bold text-lg
          bg-green-400 text-[#0b1220]
          hover:bg-green-500 hover:scale-[1.05]
          transition-all duration-300
          shadow-xl shadow-green-400/40
          flex items-center justify-center gap-2"
        >
          <span>Connect on WhatsApp</span>
          <span className="text-xl">💬</span>
        </button>

        <p className="mt-4 text-xs text-gray-500">
          Auto-closing in <span className="text-green-400 font-semibold">{secondsLeft}</span> seconds and redirecting to Whatsapp
        </p>
      </div>
    </div>
  </>
)}




      </section>
  );
};

export default Contact;