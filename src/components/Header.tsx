"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="mr-2"></div>
      <div className="text-xl font-bold">Tynetra</div>
      <Button size="icon">
        <User />
      </Button>
    </header>
  );
}
