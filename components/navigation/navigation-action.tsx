"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";

export default function NavigationAction() {
  return (
    <ActionTooltip side="right" align="center" label="server">
      <button className="group aspect-square">
        <div className="grid place-items-center h-12 aspect-square rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
          <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  );
}
