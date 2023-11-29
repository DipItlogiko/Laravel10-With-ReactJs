import React from 'react';
import ReactDOM from 'react-dom/client';   /// react-dom/client r react-dom lekha ak eee kotha kintu amader React ar new virsion oonujayi amader react-dom/client aivabe likhte hobe ta chara react-dom likhle ooo kaj korte pare...

export default function HelloReact()
{
    return(
        <h1>Hello React World!!!</h1>
    );
}

const container = document.getElementById('dip');
const root = ReactDOM.createRoot(container);
root.render(< HelloReact />);
