import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { site } from "../data/site.js";

export default function Hero() {
  return (
    <section className="container-section pt-24 pb-16 sm:pt-32 sm:pb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="badge mb-4 inline-block">Welcome</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">
            {site.name}
          </h1>

          <p className="mt-3 text-xl text-slate-500 dark:text-slate-300 leading-7 min-h-[1.75rem]">
            <ReactTyped
              strings={site.roles}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </p>

          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0">
            {site.bio}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
              <ArrowDownRight className="w-4 h-4" />
              View My Work
            </a>
            <a
              href={site.resumeUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Soft radial glow behind the avatar */}
          <motion.div
            className="absolute -inset-6 sm:-inset-8 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(124,92,255,0.35), rgba(0,231,255,0.25) 40%, transparent 65%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.6 }}
            aria-hidden
          />

          {/* Gradient ring + avatar */}
          <motion.div
            className="relative rounded-full p-[3px] sm:p-[4px] bg-gradient-to-tr from-brand-500 via-cyan-400 to-brand-500 shadow-neo"
          >
            <div className="rounded-full bg-[#0b1020] p-[2px] sm:p-[3px]">
              <img
                src="/images/ss.png"
                alt="Shoaib Ahmed"
                className="w-48 h-48 sm:w-72 sm:h-72 rounded-full object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
