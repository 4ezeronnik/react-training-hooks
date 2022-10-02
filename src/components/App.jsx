import Navigation from "./Navigation/Navigation";
import { useContext } from 'react';
import { navigationContext } from "./NavigationContext/NavigationContext";

export const App = () => {
  const navigation = useContext(navigationContext);
  const { component } = navigation;

  return (
    <div>
      <Navigation />
      {component}
    </div>
  );
};
