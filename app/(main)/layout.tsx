import React from "react";

import NavigationSidebar from "@/components/navigation/navigation-sidebar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="hidden flex-none basis-20 md:block">
        <NavigationSidebar />
      </div>
      <main className="">{children}</main>
    </div>
  );
}
