"use client";

import { Code } from "@/types";
import { useState } from "react";
import Lobby from "./_components/lobby";
import Meeting from "./_components/meeting";

type Props = {
  params: { code: Code };
};
export default function MeetingPage({ params: { code } }: Props) {
  const [isLobby, setIsLobby] = useState<boolean>(true);

  return <>{isLobby ? <Lobby /> : <Meeting />}</>;
}
