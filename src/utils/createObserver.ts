export const createObserver = ({
  target,
  onEnter,
  onLeave,
  threshold = Array.from({ length: 11 }, (_, i) => i / 10),
}: {
  target: Element;
  onEnter?: () => void;
  onLeave?: () => void;
  threshold?: number[];
}) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
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
