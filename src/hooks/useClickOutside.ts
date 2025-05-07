import { type RefObject, useCallback, useEffect } from 'react';

export const useClickOutside = (
  target: RefObject<null | HTMLElement>,
  handler: () => void,
  exceptions: RefObject<null | HTMLElement>[] = [],
) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const clickTarget = e.target as HTMLElement;
      const hasInterceptionWithTarget = target.current?.contains(clickTarget);
      const hasInterceptionsWithExceptions = exceptions.some((item) =>
        item.current?.contains(clickTarget),
      );

      if (target.current && !hasInterceptionWithTarget && !hasInterceptionsWithExceptions) {
        handler();
      }
    },
    [exceptions, handler, target],
  );

  const checkClickOutside = useCallback(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(checkClickOutside, [checkClickOutside]);
};
