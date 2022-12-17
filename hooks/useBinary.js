import { useState } from "react";


export default function useBinary(textToConvert) {

    const [text, setText] = useState(textToConvert)
    const [binary, setBinary] = useState(textToConvert?.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' '))


    function setTextContent(newText) {
        setText(newText);
        setBinary(newText?.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' '))
    }



    return { binary: binary, setTextContent: setTextContent, text: text };
} 