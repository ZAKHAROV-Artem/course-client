"use client";

import { useMeeting } from "@/hooks/state/use-meeting";
import { usePeer } from "@/hooks/state/use-peer";
import { useSocket } from "@/hooks/state/use-socket";
import { ReactNode, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

type Props = {
  children: ReactNode;
  joinMeeting: () => void;
};
export default function MeetingProvider({ children, joinMeeting }: Props) {
  const socket = useSocket();
  const { setJoinStatus, addJoinRequest } = useMeeting(
    useShallow((state) => ({
      setJoinStatus: state.setJoinStatus,
      addJoinRequest: state.addJoinRequest,
    })),
  );
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

  useEffect(() => {
    socket.on("user:wait-for-owner", () => {
      setJoinStatus("wait-for-owner");
    });
    socket.on("meeting:full", () => {
      setJoinStatus("room-is-full");
    });
    socket.on("user:rejected", () => {
      setJoinStatus("rejected");
    });
    socket.on("user:join-request", (user) => {
      addJoinRequest(user);
    });
    socket.on("user:accepted", ({ code, user }) => {
      socket.emit("meeting:join", { code, user });
      setJoinStatus("accepted");
      joinMeeting();
    });
  }, [joinMeeting, socket, setJoinStatus, addJoinRequest]);

  return <div>{children}</div>;
}
