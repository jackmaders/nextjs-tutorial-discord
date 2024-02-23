import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import NavigationAction from "@/components/navigation/navigation-action";
import NavigationItem from "@/components/navigation/navigation-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export default async function NavigationSidebar() {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: { members: { some: { profileId: profile.id } } },
  });

  return (
    <div className="flex flex-col gap-4 items-center h-full text-primary dark:bg-[#1e1f22] py-3">
      <NavigationAction />
      <Separator className="h-0.5 bg-zinc-200 dark:bg-zinc-700 rounded-md w-10" />
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-4">
          {servers.map((server) => (
            <NavigationItem
              key={server.id}
              id={server.id}
              imageUrl={server.imageUrl}
              name={server.name}
            />
          ))}
        </div>
      </ScrollArea>

      <div className="flex items-center w-full flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-12 aspect-square w-auto",
            },
          }}
        />
      </div>
    </div>
  );
}
