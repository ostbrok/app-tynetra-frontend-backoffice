"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">Tynetra</div>

      {/* Бургер-меню */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="po">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-lg">
              Главная
            </a>
            <a href="#" className="text-lg">
              О нас
            </a>
            <a href="#" className="text-lg">
              Контакты
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
