import React from "react";

const FilterButtons = ({ filterValue, filterFunc }) => {
  return (
    <div className="container center">
      <button
        className={`spacing btn-small blue`}
        onClick={() => filterFunc("SHOW_ALL")}
      >
        ALL
      </button>

      <button
        className={`spacing btn-small blue`}
        onClick={() => filterFunc("SHOW_ACTIVE")}
      >
        Active
      </button>

      <button
        className={`spacing btn-small blue`}
        onClick={() => filterFunc("SHOW_COMPLETED")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
