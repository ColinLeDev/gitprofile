import React, { Fragment } from 'react';
import { SanitizedTimeCard } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  title,
  titleLink,
  description,
  descriptionLink,
}: {
  time: React.ReactNode;
  title?: React.ReactNode;
  titleLink?: string;
  description?: React.ReactNode;
  descriptionLink?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">
      <a href={titleLink} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h3>
    <div className="mb-4 font-normal">
      <a href={descriptionLink} target="_blank" rel="noreferrer">
        {description}
      </a>
    </div>
  </li>
);

const TimeCard = ({
  timecards,
  title,
  loading,
}: {
  timecards: SanitizedTimeCard[];
  title?: string;
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
          title={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          description={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">{title ?? "TimeCard"}</span>
            )}
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {timecards.map((timecard, index) => (
                  <ListItem
                    key={index}
                    time={`${timecard.from}` + (timecard.to ? ` - ${timecard.to}` : '')}
                    title={timecard.title}
                    titleLink={
                      timecard.titleLink ? timecard.titleLink : undefined
                    }
                    description={timecard.description}
                    descriptionLink={
                      timecard.descriptionLink
                        ? timecard.descriptionLink
                        : undefined
                    }
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
