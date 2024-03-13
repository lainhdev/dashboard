"use client";

import { Button } from "@/components/ui/button";

import { AlignLeft } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-b mb-4 pb-2 w-full h-10">
      <nav className="flex justify-between w-full items-center">
        <div className="flex flex-row items-center">
          <Button variant="ghost">
            <AlignLeft />
          </Button>
          <div className="font-semibold text-lg">Logo</div>
        </div>
        <div></div>
      </nav>
    </div>
  );
}
