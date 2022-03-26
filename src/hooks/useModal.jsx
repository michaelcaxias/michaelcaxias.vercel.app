import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpenState] = useState(false);

  const clickHandler = () => {
    setIsOpenState((prevState) => !prevState);
    console.log(isOpen);
  };

  return [isOpen, clickHandler];
}
