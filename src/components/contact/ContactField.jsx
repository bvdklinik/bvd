/**
 * One labelled field of the contact form. The label, focus and error treatment is
 * the booking form's, so both forms read the same.
 */
export default function ContactField({ id, label, error, type = "text", options, ...props }) {
  const errorId = `${id}-error`;
  const control = {
    id,
    name: id,
    className: `field-premium ${error ? "border-destructive" : ""}`.trim(),
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    ...props,
  };

  return (
    <div className="field-group w-full">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea rows={5} {...control} />
      ) : type === "select" ? (
        <select {...control}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} {...control} />
      )}

      {error && (
        <div id={errorId} role="alert" className="mt-2 text-[0.8rem] text-destructive">
          {error}
        </div>
      )}
    </div>
  );
}