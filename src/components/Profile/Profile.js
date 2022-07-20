import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className='avatar' />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className='label'>Followers</span>
          <span className='quantity'>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className='label'>Views</span>
          <span className='quantity'>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className='label'>Likes</span>
          <span className='quantity'>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({followers:PropTypes.number, views:PropTypes.number, likes:PropTypes.number}),
};
