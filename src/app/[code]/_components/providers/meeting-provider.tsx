"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  joinMeeting: () => void;
};
export default function MeetingProvider({ children, joinMeeting }: Props) {
  return <div>{children}</div>;
}
