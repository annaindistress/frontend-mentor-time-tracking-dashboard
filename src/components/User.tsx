import React, { useEffect, useState } from 'react';
import Card from './Card';

const filters = ['Daily', 'Weekly', 'Monthly'];

const User = () => {
  const [currentFilter, setCurrentFilter] = useState('Weekly');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch('/frontend-mentor-time-tracking-dashboard/data.json');
      if (!response.ok) throw new Error('No data available');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="user">
      <div className="user__main">
        <div className="user__about">
          <h2 className="user__title">
            Report for <span className="user__name">Jeremy Robson</span>
          </h2>
          <img
            className="user__image"
            src="/frontend-mentor-time-tracking-dashboard/images/image-jeremy.png"
            alt="Jeremy Robson's avatar"
            width="70"
            height="70"
          />
        </div>
        <ul className="user__filter filter">
          {filters.map((filter, index) => (
            <li key={index}>
              <button
                className={`filter__button ${filter === currentFilter ? 'filter__button--active' : ''}`}
                type="button"
                onClick={() => setCurrentFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {userData === null ? (
        <p className="user__error">No data available</p>
      ) : (
        <ul className="user__list">
          {userData.map((item, index) => (
            <li className="user__item" key={index}>
              <Card filter={currentFilter.toLowerCase()} data={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default User;
