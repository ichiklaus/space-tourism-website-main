import React, { useCallback } from 'react';

import './Button.css';

function Button({ keys, value, style, setActiveContent }) {
  return (
    <div>
      <button
        className={style}
        onClick={useCallback(() => setActiveContent(keys), [keys])}
      >
        {value.name}
      </button>
    </div>
  );
}

export default Button;
