import { signOut, auth, signIn } from "../auth";
import React from "react";
import Link from "next/link";

async function appbar() {
  const session = await auth();
  /* console.log("ssssession----", session); */
  return (
    <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-2 text-white">
      <Link href={"/clientPage"}>Client page</Link>
      <Link href={"/serverPage"}>Server page</Link>
      <Link href={"/middlewareProtected"}>Middleware page</Link>
      <div className="ml-auto">
        {/*  {session && session.user ? (<div><p>{session.user.name}</p><form></form><div/>) : (<div>333<div/>)} */}
        {session && session.user ? (
          <div className="flex gap-4 text-yellow-200">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="text-white">
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit" className="text-white">
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default appbar;
