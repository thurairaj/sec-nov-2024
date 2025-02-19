'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" href={'/temperature'}>
                Temperature
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/wind'}>
                Wind
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/precipitation'}>
                precipitation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
