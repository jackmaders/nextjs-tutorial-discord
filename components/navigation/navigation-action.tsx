"use client";

import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export default function NavigationAction() {
  const { onOpen } = useModal();

  return (
    <ActionTooltip side="right" align="center" label="server">
      <button
        className="group aspect-square"
        onClick={() => {
          onOpen("createServer");
        }}
      >
        <div className="grid aspect-square h-12 place-items-center overflow-hidden rounded-3xl bg-background transition-all group-hover:rounded-2xl group-hover:bg-emerald-500 dark:bg-neutral-700">
          <Plus
            className="text-emerald-500 transition group-hover:text-white"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  );
}
