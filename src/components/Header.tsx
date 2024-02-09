import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn } from "@/auth";
import SignOut from "./SignOut";

type Props = {};
const Header = async (props: Props) => {
  const session = await auth();

  return (
    <header className="p-4">
      <nav>
        <div className="flex justify-between">
          <h1>Auth test application</h1>
          {session?.user ? (
            <div>
              <SignOut />
            </div>
          ) : (
            <Link href={"/api/auth/signin"}>
              <button className="bg-pink-400  w-[150px] py-3 rounded-3xl font-semibold transition-all duration-150 shadow-white hover:shadow-2xl hover:scale-105">
                SignIn
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
