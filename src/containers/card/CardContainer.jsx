/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'components/card/Card';

const CardContainer = ({
  card: {
    _id,
    link,
    image,
    writer,
    title,
    description,
    tags,
    date,
    platform,
    category,
    isSaved,
    logo,
    type,
  },
}) => {
  return (
    <Card
      _id={_id}
      link={link}
      image={image}
      writer={writer}
      title={title}
      description={description}
      tags={tags}
      date={date}
      platform={platform}
      category={category}
      isSaved={isSaved}
      logo={logo}
      type={type}
    />
  );
};

export default React.memo(CardContainer);
