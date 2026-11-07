import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Section anchors ("#booking", "#services") live on the home page, so from any
 * other route they resolve to "/#booking" and still land on the right block.
 *
 * When the current page carries that section itself — the services page has its
 * own FAQ and booking form — the anchor stays local instead, so the link scrolls
 * down the page rather than travelling home.
 */
export function useSectionLinks() {
  const { pathname } = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [pathname]);

  return useCallback(
    (href) => {
      if (!href || href.charAt(0) !== "#") return href;
      if (pathname === "/") return href;
      if (mounted && document.getElementById(href.slice(1))) return href;
      return `/${href}`;
    },
    [pathname, mounted]
  );
}