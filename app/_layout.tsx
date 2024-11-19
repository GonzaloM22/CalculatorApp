import { Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/assets/styles/global-styles';
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';

if (isAndroid) NavigationBar.setBackgroundColorAsync('black');

const Layout = () => {
  const [loaded] = useFonts({
    spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default Layout;
