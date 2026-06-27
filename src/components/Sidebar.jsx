import './Sidebar.css'

function Sidebar({ pages, currentPage, onNavigate }) {
  return (
    <nav className="sidebar" aria-label="Navigation">
      <h2 className="sidebar-header">Navigation</h2>
      <ul className="sidebar-nav">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`sidebar-btn${currentPage === page ? ' active' : ''}`}
              onClick={() => onNavigate(page)}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
