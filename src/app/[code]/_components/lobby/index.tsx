"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Lobby() {
  const handleJoin = () => {};
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex grow items-center p-5">
        <div className="grid h-[90%] w-full gap-5 md:grid-cols-[2fr,1fr]">
          <div className="relative">
            <div className="h-full w-full bg-slate-600"></div>
          </div>
          <div className="grid place-content-center place-items-center gap-2 text-center">
            <Button onClick={handleJoin} size={"lg"}>
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
