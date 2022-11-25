import { NavigationContainer } from '@react-navigation/native';
import Context from './src/context/Context';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <Context>
        <MainNavigation />
      </Context>
    </NavigationContainer>
  );
}
