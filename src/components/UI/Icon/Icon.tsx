import IcomoonReact from 'icomoon-react';
import { type CSSProperties, type FunctionComponent } from 'react';
import { type IconNames } from './icon.d';
import iconSet from './pathToSelection/selection.json';

interface IconProps {
  icon: IconNames;
  size?: string | number;
  color?: string;
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon: FunctionComponent<IconProps> = ({
  icon,
  size = 20,
  color,
  className,
  style,
  onClick,
}) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      style={style}
      onClick={onClick}
    />
  );
};

Icon.displayName = 'UI Icon';

export default Icon;
