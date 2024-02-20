"use client";

import { cn } from "@/lib/utils";
import ActionTooltip from "../action-tooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export default function NavigationItem({
  id,
  imageUrl,
  name,
}: NavigationItemProps) {
  const params = useParams();
  const router = useRouter();

  function handleOnClick() {
    router.push(`/server/${id}`)
  }

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={handleOnClick} className="group relative flex items-center justify-center w-full">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-1",
            params?.serverId === id ? "h-9" : "h-2 group-hover:h-5"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-12 aspect-square rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary rounded-2xl"
          )}
        >
          <Image fill src={imageUrl} alt="Channel" />
        </div>
      </button>
    </ActionTooltip>
  );
}
