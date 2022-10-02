import { helpers } from "helpers/helpers";
import Button from 'react-bootstrap/Button';


export default function Navigation({handleChange}) {
    return (
        <div>
            <ul>{Object.keys(helpers).map((helper) =>
                <li><Button variant="secondary" onClick={() => handleChange(helpers[helper])}>
                    {helper.charAt(0).toUpperCase() + helper.slice(1)}
                </Button></li>)}
            </ul>
        </div>
    );
}