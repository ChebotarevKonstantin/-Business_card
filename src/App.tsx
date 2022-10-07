
import ReactPng from './assets/images/react.png';
import { StyledDiv } from './root.styles';

type AppProps = {name?: string}

export const App = ({ name = "text" }: AppProps) => (
    <div>
        <div>{name}</div>

                   <img src={ReactPng}/>
        <StyledDiv />
    </div>
);