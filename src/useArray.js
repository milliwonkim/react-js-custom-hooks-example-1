import React, { useCallback, useState } from 'react';

export const useArray = initial => {
  const [value, setValue] = useState(initial);

  const add = useCallback(a => setValue(v => [...v, a]))
  const clear = useCallback(() => setValue(() => []));
  const removeById = useCallback(id => setValue(arr => arr.filter(v => v && v.id !== id)));
  const removeIndex = useCallback(index => setValue(v => {
    v.splice(index, 1);
    return v;
  }));

  return {
    value,
    setValue,
    add,
    clear,
    removeById,
    removeIndex
  }
}