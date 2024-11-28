import React, {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
  useMemo,
  useRef,
  useEffect,
  useContext,
} from 'react';

export interface FilterState {
  blur: number;
  brightness: number;
  contrast: number;
  grayscale: number;
}

interface ImageFilterContextValue {
  getValue: (name: keyof FilterState) => number;
  setValue: (name: keyof FilterState, value: number) => void;
  filter: string;
}

const defaultState: FilterState = {
  blur: 0,
  brightness: 100,
  contrast: 100,
  grayscale: 0,
};

export const ImageFilterContext = createContext<ImageFilterContextValue | null>(
  null,
);

const ImageFilterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<FilterState>(defaultState);
  const [debouncedFilter, setDebouncedFilter] = useState('');

  const debounceTimeout = useRef<number | null>(null);

  const getValue = useCallback(
    (name: keyof FilterState) => state[name],
    [state],
  );

  const setValue = useCallback((name: keyof FilterState, value: number) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  // Compute the filter value
  const filter = useMemo(() => {
    return `
        blur(${state.blur}px)
        brightness(${state.brightness / 100})
        contrast(${state.contrast}%)
        grayscale(${state.grayscale}%)
      `;
  }, [state]);

  // Debounce the filter updates
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = window.setTimeout(() => {
      setDebouncedFilter(filter);
    }, 100);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [filter]);

  return (
    <ImageFilterContext.Provider
      value={{
        getValue,
        setValue,
        filter: debouncedFilter, // Use debounced filter
      }}
    >
      {children}
    </ImageFilterContext.Provider>
  );
};

export const useFilterValue = (name: keyof FilterState) => {
  const context = useContext(ImageFilterContext);
  if (!context) {
    throw new Error('useFilterValue must be used within ImageFilterProvider');
  }
  return context.getValue(name);
};

export default ImageFilterProvider;
