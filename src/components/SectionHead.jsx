export default function SectionHead({ index, label, title, lead, id }) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {label}
      </p>
      <h2 className="section-title" id={id}>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
