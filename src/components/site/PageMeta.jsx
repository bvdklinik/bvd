import { useEffect } from "react";

/**
 * Sets the title, description, social tags and canonical link for the current
 * route, and restores everything the moment the visitor leaves the page.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const entries = [
      { attr: "name", name: "description", value: description },
      { attr: "property", name: "og:title", value: title },
      { attr: "property", name: "og:description", value: description },
      { attr: "property", name: "og:url", value: window.location.href },
      { attr: "name", name: "twitter:title", value: title },
      { attr: "name", name: "twitter:description", value: description },
    ];

    const restores = entries.map(({ attr, name, value }) => {
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      const previous = tag.getAttribute("content");
      if (value) tag.setAttribute("content", value);
      return () => {
        if (previous === null) tag.remove();
        else tag.setAttribute("content", previous);
      };
    });

    // One canonical link per route, so search engines index a single URL.
    let canonical = document.head.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const previousHref = canonical.getAttribute("href");
    canonical.setAttribute("href", window.location.href);

    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
      if (createdCanonical) canonical.remove();
      else if (previousHref !== null) canonical.setAttribute("href", previousHref);
    };
  }, [title, description]);

  return null;
}