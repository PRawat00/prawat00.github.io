import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { AWARDS } from "../../data/awards";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./award-item";

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Honors & Awards
          {AWARDS.length > 0 && (
            <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
              ({AWARDS.length})
            </sup>
          )}
        </PanelTitle>
      </PanelHeader>

      {AWARDS.length > 0 ? (
        <CollapsibleList
          items={SORTED_AWARDS}
          max={8}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <AwardItem award={item} />}
        />
      ) : (
        <div className="py-8 text-center text-muted-foreground">
          <p className="text-sm">
            Awards and achievements will be displayed here.
          </p>
          <p className="mt-1 text-xs">
            Academic and professional recognitions coming soon!
          </p>
        </div>
      )}
    </Panel>
  );
}
