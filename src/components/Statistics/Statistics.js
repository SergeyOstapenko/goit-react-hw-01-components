import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className="percentage">{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
