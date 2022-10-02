import Navigation from "./Navigation/Navigation";
import { useState } from 'react';
import { helpers } from '../helpers/helpers';

export const App = () => {
  const [component, setComponent] = useState(() => helpers.home);

  const handlerTumbler = (component) => {
    setComponent(component);
  }

  return (
    <div>
      <Navigation handleChange={handlerTumbler}/>
      {component}
    </div>
  );
};
