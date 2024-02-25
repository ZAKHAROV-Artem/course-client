"use client";

import { usePeer } from "@/hooks/state/use-peer";
import { useSocket } from "@/hooks/state/use-socket";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  joinMeeting: () => void;
};
export default function MeetingProvider({ children, joinMeeting }: Props) {
  const socket = useSocket();
  const { myPeerId, setMyPeerId, setPeer } = usePeer();
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    (async function createPeer() {
      try {
        const peer = new (await import("peerjs")).default();
        setPeer(peer);
        peer.on("open", (peerId) => {
          setMyPeerId(peerId);
        });

        peer.on("error", (err) =>
          console.log("Failed to setup peer connection", err),
        );
      } catch (e) {
        console.log("Unable to create peer");
      }
    })();
  }, [setMyPeerId, setPeer]);

  return <div>{children}</div>;
}
