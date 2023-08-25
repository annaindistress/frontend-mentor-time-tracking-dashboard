import React from 'react';

const descriptionMap = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};

const Card = ({ filter, data }) => {
  console.log(data.timeframes[filter]);

  return (
    <article className={`card card--${data.title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="card__content">
        <h3 className="card__title">{data.title}</h3>
        <button className="card__more" type="button">
          <svg className="card__more-icon" viewBox="0 0 21 5" width="21">
            <title>More</title>
            <use href="/frontend-mentor-time-tracking-dashboard/images/sprite.svg#more"></use>
          </svg>
        </button>
        <p className="card__current">{data.timeframes[filter].current}hrs</p>
        <p className="card__previous">
          Last {descriptionMap[filter]} - {data.timeframes[filter].previous}hrs
        </p>
      </div>
    </article>
  );
};

export default Card;
