import { globalStyles } from '@/assets/styles/global-styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant, ...props }: Props) => {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'spaceMono' },
        variant === 'h2' ? globalStyles.subResult : globalStyles.mainResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
