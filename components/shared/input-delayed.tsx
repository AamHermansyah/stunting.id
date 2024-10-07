import React, { useEffect, useMemo, ChangeEvent, FC } from 'react';
import _ from 'lodash';
import { Input } from '../ui/input';

interface InputDelayedProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const InputDelayed: FC<InputDelayedProps> = ({ placeholder, onChange }) => {
  const debouncedResults = useMemo(() => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    return _.debounce(handleChange, 500);
  }, [onChange]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <div>
      <Input
        onChange={debouncedResults}
        placeholder={placeholder}
        name="search"
      />
    </div>
  );
};

export default InputDelayed;
