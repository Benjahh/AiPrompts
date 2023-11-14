"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          alt="AiPrompts Logo"
          height={30}
          width={30}
          className="object-contain"
          src="/assets/images/logo.svg"
        />
        <p className="logo_text">AI-Prompts </p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              {" "}
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              {" "}
              Sign Out
            </button>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
