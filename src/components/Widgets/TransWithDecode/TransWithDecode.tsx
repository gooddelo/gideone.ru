import { decode } from 'he';
import React, { type ReactNode } from 'react';
import { Trans } from 'react-i18next';

const decodeChildren = (children: ReactNode): ReactNode => {
  if (typeof children === 'string') {
    return decode(children);
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <React.Fragment key={i}>{decodeChildren(child)}</React.Fragment>
    ));
  }
  if (React.isValidElement(children) && children.props.children) {
    return React.cloneElement(children, {
      children: decodeChildren(children.props.children),
    });
  }
  return children;
};

const TransWithDecode: React.FC<React.ComponentProps<typeof Trans>> = (props) => {
  return <Trans {...props}>{decodeChildren(props.children)}</Trans>;
};

export default TransWithDecode;
