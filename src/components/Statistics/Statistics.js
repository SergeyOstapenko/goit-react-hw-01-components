import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
