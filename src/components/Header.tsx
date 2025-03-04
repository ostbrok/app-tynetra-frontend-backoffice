"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import SidebarNavigation from "./SidebarNavigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="mr-2">
        <SidebarNavigation />
      </div>
      <div className="text-xl font-bold">Tynetra</div>
      <Button size="icon">
        <User />
      </Button>
    </header>
  );
}
