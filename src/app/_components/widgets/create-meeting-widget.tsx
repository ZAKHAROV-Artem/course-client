"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function CreateMeetingWidget() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Create new meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new meeting</DialogTitle>
        </DialogHeader>
        <form>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="English lesson"
            className="mt-2 h-10"
            maxLength={110}
          />
          <Button type="submit" className="mt-2 w-full" size={"sm"}>
            Create new meeting
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
