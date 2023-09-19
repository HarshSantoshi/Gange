import './App.css';
import SignIn from './Components/SignIn.js';

import bg from './Components/Images/gange_bg.jpeg';

const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

function App() {
    return (
        <div style={backgroundStyle}>
            <SignIn />
        </div>
    );
}

export default App;
