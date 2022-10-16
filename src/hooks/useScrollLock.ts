import { useEffect } from 'react';

export const useScrollLock = () => {
  // 参考 https://mebee.info/2022/03/16/post-61964/
  const handle = (event: Event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('touchmove', handle, { passive: false });
    document.addEventListener('mousewheel', handle, { passive: false });

    return () => {
      (document as any).removeEventListener('touchmove', handle, {
        passive: false,
      });
      (document as any).removeEventListener('mousewheel', handle, {
        passive: false,
      });
    };
  }, []);
};
