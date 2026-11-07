import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";

/**
 * One heading block for every treatment section: a brass rule and eyebrow, the
 * section title, then the lead copy — either beneath the title or, in split
 * mode, in its own column so the section opens like an editorial spread.
 */
export default function EditorialHeading({
  label,
  title,
  lead,
  action,
  split = false,
  className = "",
  titleClassName = "",
}) {
  if (split) {
    return (
      <div className={`mb-10 grid items-end gap-6 md:grid-cols-2 md:gap-14 ${className}`.trim()}>
        <div>
          <Reveal className="mb-3 flex items-center gap-3">
            <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={70} className={titleClassName}>
            {title}
          </Reveal>
        </div>

        <div className="md:max-w-[32rem] md:justify-self-end">
          {lead ? (
            <Reveal delay={130}>
              <p>{lead}</p>
            </Reveal>
          ) : null}
          {action ? (
            <Reveal delay={180} className="mt-6">
              {action}
            </Reveal>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-10 ${className}`.trim()}>
      <Reveal className="mb-3 flex items-center gap-3">
        <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
        <SectionLabel>{label}</SectionLabel>
      </Reveal>
      <Reveal as="h2" delay={70} className={titleClassName}>
        {title}
      </Reveal>
      {lead ? (
        <Reveal delay={130} className="mt-4 max-w-[46rem]">
          <p>{lead}</p>
        </Reveal>
      ) : null}
      {action ? (
        <Reveal delay={180} className="mt-6">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}