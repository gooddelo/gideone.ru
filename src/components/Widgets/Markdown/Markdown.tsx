import { decode } from 'he';
import { type FC, type PropsWithChildren } from 'react';

export const Markdown: FC<PropsWithChildren> = ({ children }) => {
  if (typeof children === 'string') {
    return <>{decode(children)}</>;
  }

  return <>{children}</>;
};
