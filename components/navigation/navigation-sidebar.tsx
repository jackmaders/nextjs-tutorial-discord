import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import NavigationAction from "./navigation-action";
import NavigationItem from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

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
        <UserButton afterSignOutUrl="/"appearance={{elements:{
          avatarBox:"h-12 aspect-square w-auto"
        }}} />
      </div>
    </div>
  );
}
