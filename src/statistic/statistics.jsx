import React from "react";
import PropTypes from "prop-types";
import "./statistics.css";

const Statistics = ({ title, stats }) => {
  // Culori predefinite în funcție de index
  const colors = ["#4d86dc", "#e04f69", "#ff3d00", "#00bfa5"];

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li key={stat.id} className="item" style={{ backgroundColor: colors[index % colors.length] }}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
