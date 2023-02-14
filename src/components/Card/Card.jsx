import React from 'react';
import {
  CardDiv,
  DescArea,
  Details,
  Tag,
  TeamFlex,
  Thumbnail,
  Title,
  UpdatedOn,
} from './CardStyle';

const Card = ({ title, thumbnail, updated, lessons, minutes, team }) => {
  return (
    <CardDiv>
      <Thumbnail src={thumbnail} />
      <DescArea>
        <Title>{title}</Title>
        <UpdatedOn>Last updated : {updated}</UpdatedOn>
        <Details>
          <span>
            <img src="/assets/images/lesson.svg" alt="" />
            <p>Lessons</p>
            <p>:</p>
            <p>{lessons}</p>
          </span>
          <span>
            <img src="/assets/images/clock.svg" alt="" />
            <p>Minutes</p>
            <p>:</p>
            <p>{minutes}</p>
          </span>
        </Details>
        <TeamFlex>
          {team.map((item) => {
            return <Tag>{item}</Tag>;
          })}
        </TeamFlex>
      </DescArea>
    </CardDiv>
  );
};

export default Card;
