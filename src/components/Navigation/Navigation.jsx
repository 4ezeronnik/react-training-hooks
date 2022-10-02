import { useContext, useRef, useEffect } from 'react';
import { navigationContext } from 'components/NavigationContext/NavigationContext';
import { helpers } from "helpers/helpers";
import Button from 'react-bootstrap/Button';
import { valueContext } from 'components/ValueContext/ValueContext';


export default function Navigation() {
    const navigation = useContext(navigationContext);
    const { handlerTumbler } = navigation;

    const value = useContext(valueContext);
    const { setValue } = value;

    const currentRef = useRef('Started meaning');
    console.log('outside', currentRef);

    useEffect(() => {
        currentRef.current.style.background = 'black';
        console.log('inside', currentRef);
    }, []);
    

    return (
        <div>
            <ul ref={currentRef} >{Object.keys(helpers).map((helper) =>
                <li key={helper}><Button variant="secondary" onClick={() => { handlerTumbler(helpers[helper]); setValue('ABCD') }}>
                    {helper.charAt(0).toUpperCase() + helper.slice(1)}
                </Button></li>)}
            </ul>
        </div>
    );
}