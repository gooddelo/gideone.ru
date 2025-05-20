export const createObserver = ({
  target,
  onEnter,
  onLeave,
  onChange,
  threshold = Array.from({ length: 11 }, (_, i) => i / 10),
}: {
  target: Element;
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (ratio: number) => void;
  threshold?: number[];
}) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const ratio = entry.intersectionRatio;

      onChange?.(ratio);

      if (entry.isIntersecting) {
        onEnter?.();
      } else {
        onLeave?.();
      }
    },
    { threshold },
  );

  observer.observe(target);

  return observer;
};
