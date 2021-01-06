
import React from 'react';
import { Loader } from '../../loader/Loader';

const Card = (props) => {
  const { children, id, readyToRender, title } = props;

  return (
    <div className={`card`} id={id}>
      {title && (
        <h4 className="card-header">
          {title}
        </h4>
      )}
      <Loader coverAllPage={false} readyToRender={readyToRender}>
        <div className="card-content">{children}</div>
      </Loader>
    </div>
  );
};

Card.defaultProps = {
  customClasses: '',
  readyToRender: true,
  title: null,
};

export default Card;
