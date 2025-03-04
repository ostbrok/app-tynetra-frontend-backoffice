"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, ListChecks, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function SidebarNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-4 flex flex-col gap-4">
        <SheetTitle className="text-xl font-semibold mb-4">
          Tynetra Backoffice
        </SheetTitle>

        <Button
          variant="outline"
          className="w-full text-lg py-4 flex items-center gap-2"
          onClick={() => setOpen(false)}
          asChild
        >
          <Link href="/">
            <Home className="w-6 h-6" />
            Главная
          </Link>
        </Button>

        <Button
          variant="outline"
          className="w-full text-lg py-4 flex items-center gap-2"
          onClick={() => setOpen(false)}
          asChild
        >
          <Link href="/products">
            <ListChecks className="w-6 h-6" />
            Продукты
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
