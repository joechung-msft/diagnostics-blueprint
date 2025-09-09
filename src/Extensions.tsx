import { useState } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import { byKey, isExtensionInfo, toNavLink } from "./utils";

const Extensions: React.FC<ExtensionsProps> = ({ extensions, onLinkClick }) => {
  const links = Object.values(extensions)
    .filter(isExtensionInfo)
    .map(toNavLink)
    .sort(byKey);

  const [selectedTabId, setSelectedTabId] = useState<string>(links[0]?.key);

  return (
    <div className="extension-root">
      <Tabs
        vertical
        selectedTabId={selectedTabId}
        onChange={(tabId) => {
          setSelectedTabId(tabId as string);
          const link = links.find((l) => l.key === tabId);
          if (link) {
            onLinkClick?.(undefined, link);
          }
        }}
      >
        {links.map((link) => (
          <Tab aria-controls="extension" key={link.key} title={link.name} />
        ))}
      </Tabs>
    </div>
  );
};

export default Extensions;
