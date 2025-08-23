import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

// Add a default value to the context
const PortfolioContext = createContext({
  isEnglish: true,
  setIsEnglish: () => { },
});

function PortfolioProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);

  const contextValue = {
    isEnglish,
    setIsEnglish
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export both the provider and context
export { PortfolioContext, PortfolioProvider };

export default PortfolioProvider;
