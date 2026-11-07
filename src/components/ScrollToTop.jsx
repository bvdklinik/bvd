import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // A hash always wins: cross-page links ("/#booking") land on their block even
    // when the page arrives as a fresh load. The target may only exist after the
    // app has mounted, so keep looking for it briefly.
    if (hash) {
      const id = getHashId(hash);
      let attempts = 0;
      let timer = 0;
      const scrollToTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          return;
        }
        if (attempts < 20) {
          attempts += 1;
          timer = window.setTimeout(scrollToTarget, 100);
        }
      };
      timer = window.setTimeout(scrollToTarget, 50);
      return () => window.clearTimeout(timer);
    }

    if (navigationType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}