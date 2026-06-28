function FairHelp() {
  return (
    <section aria-labelledby="fair-help-title">
      <h2 id="fair-help-title" className="section-title">
        How to make your dataset more FAIR
      </h2>
      <p className="fair-intro">
        Use this quick guide to improve dataset findability, accessibility, interoperability, and
        reusability.
      </p>
      <ul className="principle-list">
        <li>
          <span className="item-code">1.</span> Add ontology terms (for example ENVO or SWEET) so
          concepts are machine-readable and interoperable.
        </li>
        <li>
          <span className="item-code">2.</span> Add a clear reuse license such as CC-BY-4.0 or
          CC0-1.0.
        </li>
        <li>
          <span className="item-code">3.</span> Provide rich metadata using a profile such as
          Dublin Core (title, creator, date, subject, and description).
        </li>
        <li>
          <span className="item-code">4.</span> Include a persistent identifier (DOI/ARK) and an
          access landing page.
        </li>
      </ul>
    </section>
  )
}

export default FairHelp
