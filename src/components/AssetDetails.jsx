import { useState } from 'react'
import './AssetDetails.css'

const assets = [
  {
    id: 'coastal-water-quality',
    name: 'Coastal Water Quality Time Series',
    description:
      'Daily coastal sensor measurements with controlled environmental metadata. Data spans 5 years of continuous monitoring from three buoy stations.',
    ontologyTerms: ['ENVO:00002259 (coastal water)', 'SWEET:seaWater', 'ENVO:01000020 (marine biome)'],
    license: 'CC-BY-4.0',
    persistentIdentifier: 'doi:10.48539/fairflow.coastal.2026',
    accessUrl: 'https://example.org/datasets/coastal-water-quality',
    format: 'NetCDF / CSV',
    publisher: 'Marine Research Institute',
    published: '2026-01-15',
    keywords: ['water quality', 'coastal monitoring', 'sensors', 'salinity', 'temperature'],
  },
  {
    id: 'urban-tree-health',
    name: 'Urban Tree Health Survey',
    description:
      'Field observations of tree condition recorded by trained surveyors across 12 urban districts. Includes canopy cover, pest damage ratings, and species information.',
    ontologyTerms: ['NCBITAXON:3398 (Magnoliophyta)', 'ENVO:00000425 (urban biome)'],
    license: 'CC0-1.0',
    persistentIdentifier: 'ark:/12345/urban-tree-health',
    accessUrl: 'https://example.org/datasets/urban-tree-health',
    format: 'CSV / GeoJSON',
    publisher: 'City Parks Department',
    published: '2025-09-01',
    keywords: ['urban forestry', 'tree health', 'biodiversity', 'green infrastructure'],
  },
  {
    id: 'historic-rainfall-ledger',
    name: 'Historic Rainfall Ledger',
    description:
      'Digitised rainfall tables drawn from handwritten station logs dating back to 1880. Still requires a formal license and richer persistent identifier support.',
    ontologyTerms: ['Wikidata:Q25515 (precipitation)'],
    license: '',
    persistentIdentifier: '',
    accessUrl: 'https://example.org/datasets/historic-rainfall-ledger',
    format: 'CSV',
    publisher: 'National Meteorological Archive',
    published: '2024-11-20',
    keywords: ['rainfall', 'historical records', 'climate', 'meteorology'],
  },
  {
    id: 'soil-microbiome-atlas',
    name: 'Soil Microbiome Atlas',
    description:
      'Amplicon sequencing data from 400 soil samples collected across temperate grassland, forest, and arable land. Metadata follows MIxS standards.',
    ontologyTerms: [
      'ENVO:00001998 (soil)',
      'NCBITAXON:2 (Bacteria)',
      'OBI:0000070 (assay)',
      'MIxS:soil (environmental package)',
    ],
    license: 'CC-BY-4.0',
    persistentIdentifier: 'doi:10.48539/fairflow.soilmicro.2025',
    accessUrl: 'https://example.org/datasets/soil-microbiome-atlas',
    format: 'FASTQ / TSV',
    publisher: 'Agricultural Genomics Lab',
    published: '2025-05-30',
    keywords: ['microbiome', '16S rRNA', 'soil ecology', 'amplicon sequencing'],
  },
]

const scoreCriteria = [
  {
    id: 'F',
    label: 'Findable',
    checkLabel: 'Persistent identifier',
    passes: (asset) => Boolean(asset.persistentIdentifier),
    color: '#1a73e8',
  },
  {
    id: 'A',
    label: 'Accessible',
    checkLabel: 'Access landing page',
    passes: (asset) => Boolean(asset.accessUrl),
    color: '#34a853',
  },
  {
    id: 'I',
    label: 'Interoperable',
    checkLabel: 'Metadata ontology terms',
    passes: (asset) => asset.ontologyTerms.length > 0,
    color: '#fbbc04',
  },
  {
    id: 'R',
    label: 'Reusable',
    checkLabel: 'Data license',
    passes: (asset) => Boolean(asset.license),
    color: '#ea4335',
  },
]

function renderValue(value) {
  return value || <span className="value-missing">Not provided</span>
}

function ScoreBadge({ total, max = 4 }) {
  const pct = total / max
  const cls = pct === 1 ? 'badge-full' : pct >= 0.5 ? 'badge-partial' : 'badge-low'
  return (
    <span className={`fair-badge ${cls}`} aria-label={`FAIR score ${total} out of ${max}`}>
      FAIR {total}/{max}
    </span>
  )
}

function AssetCard({ asset }) {
  const [expanded, setExpanded] = useState(false)
  const scores = scoreCriteria.map((c) => ({ ...c, passed: c.passes(asset) }))
  const total = scores.filter((s) => s.passed).length

  return (
    <article className="asset-card" aria-labelledby={`asset-title-${asset.id}`}>
      <div className="asset-card-header">
        <div className="asset-card-title-group">
          <h2 className="asset-title" id={`asset-title-${asset.id}`}>
            {asset.name}
          </h2>
          <p className="asset-description">{asset.description}</p>
        </div>
        <ScoreBadge total={total} />
      </div>

      <div className="asset-score-row">
        {scores.map((s) => (
          <span
            key={s.id}
            className={`score-pill ${s.passed ? 'score-pill-pass' : 'score-pill-fail'}`}
            title={`${s.label}: ${s.checkLabel} — ${s.passed ? 'Pass' : 'Needs work'}`}
          >
            {s.id}
          </span>
        ))}
      </div>

      <dl className="asset-meta">
        <div className="asset-meta-item">
          <dt>Ontology terms</dt>
          <dd>
            {asset.ontologyTerms.length > 0 ? (
              <ul className="ontology-list">
                {asset.ontologyTerms.map((term) => (
                  <li key={term} className="ontology-term">
                    {term}
                  </li>
                ))}
              </ul>
            ) : (
              renderValue('')
            )}
          </dd>
        </div>
        <div className="asset-meta-item">
          <dt>License</dt>
          <dd>{renderValue(asset.license)}</dd>
        </div>
        <div className="asset-meta-item">
          <dt>Persistent identifier</dt>
          <dd>{renderValue(asset.persistentIdentifier)}</dd>
        </div>
        <div className="asset-meta-item">
          <dt>Access link</dt>
          <dd>
            {asset.accessUrl ? (
              <a
                className="asset-link"
                href={asset.accessUrl}
                aria-label={`Open access landing page for ${asset.name}`}
              >
                View landing page
              </a>
            ) : (
              renderValue('')
            )}
          </dd>
        </div>
      </dl>

      <button
        className="details-toggle"
        aria-expanded={expanded}
        aria-controls={`details-${asset.id}`}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? 'Hide details' : 'Show details'}
      </button>

      {expanded && (
        <div id={`details-${asset.id}`} className="asset-details-panel">
          <dl className="asset-extra-meta">
            <div className="asset-meta-item">
              <dt>Format</dt>
              <dd>{renderValue(asset.format)}</dd>
            </div>
            <div className="asset-meta-item">
              <dt>Publisher</dt>
              <dd>{renderValue(asset.publisher)}</dd>
            </div>
            <div className="asset-meta-item">
              <dt>Published</dt>
              <dd>{renderValue(asset.published)}</dd>
            </div>
            <div className="asset-meta-item">
              <dt>Keywords</dt>
              <dd>
                {asset.keywords && asset.keywords.length > 0 ? (
                  <ul className="keyword-list">
                    {asset.keywords.map((kw) => (
                      <li key={kw} className="keyword-tag">
                        {kw}
                      </li>
                    ))}
                  </ul>
                ) : (
                  renderValue('')
                )}
              </dd>
            </div>
          </dl>
          <section className="fair-breakdown" aria-labelledby={`fair-breakdown-${asset.id}`}>
            <h3 id={`fair-breakdown-${asset.id}`} className="breakdown-title">
              FAIR score breakdown
            </h3>
            <ul className="score-list">
              {scores.map((s) => (
                <li
                  key={s.id}
                  className={`score-item ${s.passed ? 'score-item-pass' : 'score-item-fail'}`}
                >
                  <span className="score-code" style={{ background: s.passed ? s.color : undefined }}>
                    {s.id}
                  </span>
                  <span>
                    {s.label}: {s.checkLabel} —{' '}
                    <strong>{s.passed ? 'Pass' : 'Needs work'}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </article>
  )
}

function AssetDetails() {
  return (
    <section className="asset-details" aria-labelledby="asset-details-title">
      <h1 className="section-title" id="asset-details-title">
        Asset Details
      </h1>
      <p className="section-intro">
        Detailed views of each research asset including FAIR scores, ontology terms, license
        information, and additional metadata. Expand an asset to see its full FAIR breakdown.
      </p>
      <div className="asset-list">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  )
}

export default AssetDetails
