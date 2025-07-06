import Link from "next/link";
import { MotionDiv, MotionP } from "./MotionWrapper";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-500/30 text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="#" className="text-sm hover:underline">
              FAQs
            </Link>
          </MotionDiv>

          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-sm"
          >
            Copyright 2025 © DocDigest
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm font-semibold">Follow me:</span>
            <a
              href="https://www.instagram.com/_asif47_/"
              target="_blank"
              className="text-sm hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/asif.istiaq.2025/"
              target="_blank"
              className="text-sm hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://bd.linkedin.com/in/md-istiaque-ahmed-asif-86972033a"
              target="_blank"
              className="text-sm hover:underline"
            >
              LinkedIn
            </a>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
export default Footer;
