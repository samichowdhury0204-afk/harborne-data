import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const VARIANTS = {
  DEEP_TECH: 'deep-tech',
  DATA_INFRA: 'data-infra',
  TRADITIONAL: 'traditional'
};

export const VARIANT_CONFIG = {
  [VARIANTS.DEEP_TECH]: {
    name: 'Deep Tech Scientific',
    description: 'Research lab aesthetic',
    colors: {
      background: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#4A4A4A',
      accent: '#94A378',
      border: '#E0E0E0'
    },
    typography: {
      density: 'spacious',
      style: 'academic'
    }
  },
  [VARIANTS.DATA_INFRA]: {
    name: 'Modern Data Infrastructure',
    description: 'Technical dashboard',
    colors: {
      background: '#4A505E',
      surface: '#3A3F4A',
      text: '#E4E4DE',
      textSecondary: '#E4E4DE99',
      accent: '#94A378',
      border: '#E4E4DE15'
    },
    typography: {
      density: 'compact',
      style: 'monospaced-heavy'
    }
  },
  [VARIANTS.TRADITIONAL]: {
    name: 'Traditional IT / MSP',
    description: 'Balanced & structured',
    colors: {
      background: '#F5F5F0',
      surface: '#E4E4DE',
      text: '#2A2A2A',
      textSecondary: '#5A5A5A',
      accent: '#94A378',
      border: '#CACAC0'
    },
    typography: {
      density: 'balanced',
      style: 'explanatory'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [variant, setVariant] = useState(() => {
    // Try to load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-variant');
      return saved || VARIANTS.DATA_INFRA;
    }
    return VARIANTS.DATA_INFRA;
  });

  useEffect(() => {
    // Save to localStorage when variant changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-variant', variant);
    }
  }, [variant]);

  const value = {
    variant,
    setVariant,
    config: VARIANT_CONFIG[variant]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
