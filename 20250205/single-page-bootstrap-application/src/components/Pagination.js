export default function Pagination({ current, total, onPageChange }) {
  const pages = [];
  const maxNumberOfPages = 5;
  const end = Math.min(current + 2, total);
  const start = Math.max(end - maxNumberOfPages, 0);

  let count = start;
  while (count < start + maxNumberOfPages && count < total) {
    pages.push(count);
    count++;
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li
          className="page-item"
          onClick={() => onPageChange(current === 0 ? 0 : current - 1)}>
          <span className="page-link user-select-none">Previous</span>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${current === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}>
            <span className={'page-link user-select-none'}>{page + 1}</span>
          </li>
        ))}
        <li className="page-item">
          <span
            className="page-link"
            onClick={() =>
              onPageChange(current === total - 1 ? current : current + 1)
            }>
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}
