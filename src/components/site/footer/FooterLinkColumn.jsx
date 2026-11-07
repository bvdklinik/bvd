import TextLink from "../TextLink";
import { useSectionLinks } from "@/lib/useSectionLinks";

/** One footer link column. Section anchors resolve to the home page from any route. */
export default function FooterLinkColumn({ title, links }) {
  const resolveHref = useSectionLinks();

  return (
    <div>
      <h3 className="text-meta mb-3">{title}</h3>
      <ul className="flex flex-col gap-0.5">
        {links.map((link) => (
          <li key={link.label}>
            <TextLink label={link.label} href={resolveHref(link.href)} />
          </li>
        ))}
      </ul>
    </div>
  );
}