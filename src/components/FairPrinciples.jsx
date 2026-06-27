import './FairPrinciples.css'

const principles = [
  {
    id: 'F',
    label: 'Findable',
    color: '#1a73e8',
    items: [
      { code: 'F1', text: 'Assign rich, machine-readable metadata describing data origin, purpose, and format.' },
      { code: 'F2', text: 'Assign persistent and globally unique identifiers (e.g., DOIs) to the data and its versions.' },
      { code: 'F3', text: 'Make data discoverable through search engines and registries using relevant keywords.' },
      { code: 'F4', text: 'Clearly document how potential users can access the data (e.g., open access, controlled access).' },
    ],
  },
  {
    id: 'A',
    label: 'Accessible',
    color: '#34a853',
    items: [
      { code: 'A1', text: 'Implement mechanisms for users to retrieve the data (e.g., download, API).' },
      { code: 'A1.1', text: 'Provide a landing page with information about the data, access procedures, and usage guidelines.' },
      { code: 'A2', text: 'If access is controlled, define clear and obtainable access credentials.' },
      { code: 'A3', text: 'Ensure long-term storage and preservation of the data to prevent loss.' },
    ],
  },
  {
    id: 'I',
    label: 'Interoperable',
    color: '#fbbc04',
    items: [
      { code: 'I1', text: 'Use widely accepted, open data formats that are platform-independent (e.g., CSV, JSON).' },
      { code: 'I2', text: 'Provide a data dictionary defining the meaning, structure, and units of each data element.' },
      { code: 'I3', text: 'Use controlled vocabularies (standard terms) to ensure consistency and facilitate data sharing.' },
      { code: 'I4', text: 'For complex data, include the code used to generate or analyze it, enabling reproducibility.' },
    ],
  },
  {
    id: 'R',
    label: 'Reusable',
    color: '#ea4335',
    items: [
      { code: 'R1', text: 'Ensure metadata is clear, comprehensive, and understandable for future users.' },
      { code: 'R1.1', text: 'Document the origin, processing history, and any transformations applied to the data.' },
      { code: 'R2', text: 'Clearly define the license or terms of use to guide data reuse (e.g., Creative Commons).' },
      { code: 'R3', text: 'Provide detailed readme files with instructions, known limitations, and data usage considerations.' },
    ],
  },
]

function FairPrinciples() {
  return (
    <section className="fair-principles">
      <h2 className="section-title">FAIR Principles for Data Management</h2>
      <p className="fair-intro">
        The FAIR principles outline a framework for ensuring research data is{' '}
        <strong>F</strong>indable, <strong>A</strong>ccessible,{' '}
        <strong>I</strong>nteroperable, and <strong>R</strong>eusable.
      </p>
      <div className="principles-grid">
        {principles.map((principle) => (
          <div
            key={principle.id}
            className="principle-card"
            style={{ borderTopColor: principle.color }}
          >
            <h3 className="principle-heading" style={{ color: principle.color }}>
              <span className="principle-letter">{principle.id}</span> — {principle.label}
            </h3>
            <ul className="principle-list">
              {principle.items.map((item) => (
                <li key={item.code}>
                  <span className="item-code">{item.code}.</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="fair-footer">
        By following the FAIR principles, researchers can significantly improve the findability,
        accessibility, usability, and overall impact of their research data.
      </p>
    </section>
  )
}

export default FairPrinciples
