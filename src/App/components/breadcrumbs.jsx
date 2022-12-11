import React from "react";

const Breadcrumbs = () => {
  return (
    <nav
      //  style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb"
      className="m-2"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Главная</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="#">Товары по скидке</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="#">Наушники</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Беспроводные наушники
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
