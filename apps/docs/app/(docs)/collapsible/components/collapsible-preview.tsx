import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "shadcn-animated";
import { ChevronDownIcon } from "lucide-react";

const CollapsiblePreview = () => {
  return (
    <div className="mx-auto w-xs h-50">
      <Collapsible className="max-w-md w-xs p-4 rounded-2xl  h-auto">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full text-lg">
              Product details
              <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
            </Button>
          }
        />

        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 text-sm">
          <div className="text-[16px] text-secondary-foreground">
            This panel can be expanded or collapsed to reveal additional
            content.
          </div>
          <Button size="lg">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default CollapsiblePreview;
