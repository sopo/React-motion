"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Collapsible({ className, ...props }: CollapsiblePrimitive.Root.Props) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("bg-background", className)}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "active:scale-none w-full bg-background hover:bg-background focus-visible:bg-background data-panel-open:bg-background",
        className,
      )}
      {...props}
    />
  );
}

function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      keepMounted
      className="overflow-hidden"
      {...props}
      render={(panelProps, state) => (
        <motion.div
          initial={false}
          animate={{
            height: state.open ? "auto" : 0,
            opacity: state.open ? 1 : 0,
            y: state.open ? 0 : 10,
          }}
          transition={{
            height: {
              ease: "easeOut",
              duration: 0.18,
            },
            opacity: {
              duration: 0.18,
              ease: "easeIn",
            },
            y: {
              ease: "easeOut",
              duration: 0.25,
            },
          }}
        >
          <div {...panelProps} className={cn(className)}>
            {children}
          </div>
        </motion.div>
      )}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
