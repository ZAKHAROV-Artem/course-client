"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function JoinMeetingWidget() {
  const [code, setCode] = useState<string>("");
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-[3fr,1fr]">
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-14 sm:rounded-2xl"
          placeholder="Enter code"
          maxLength={18}
        />
        <Button className="sm:rounded-2xl">Join</Button>
      </div>
      <div className="ml-2 mt-1">{code.length}/18</div>
    </>
  );
}
