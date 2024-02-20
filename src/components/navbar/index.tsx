import Image from "next/image";
import Time from "./time";
import MyAvatar from "./my-avatar";
import { auth } from "@/../auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="flex h-[12vh] w-full items-center justify-between bg-light-primary px-5 py-3 dark:bg-dark-primary">
      <Image
        src="/logo.png"
        alt="Logotype"
        width={65}
        height={65}
        quality={100}
      />
      <div className="flex items-center gap-x-5">
        <Time />
        {session && <MyAvatar />}
      </div>
    </div>
  );
}
