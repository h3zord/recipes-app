import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton(props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyUrl = () => {
    const { url } = props;
    clipboardCopy(`http://localhost:3000${url}`);
    setIsCopied(true);
  };

  return (
    <button
      src={ shareIcon }
      type="button"
      data-testid="share-btn"
      onClick={ copyUrl }
    >
      <img
        src={ shareIcon }
        alt="Share Icon"
      />
      { isCopied && ' Link copied!' }
    </button>
  );
}

ShareButton.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired }),
}.isRequired;

export default ShareButton;
