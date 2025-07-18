import { useEffect, useRef, useState } from "react";
import '../styles/validateOTP.css';
const OTP_LENGTH = 6;

const ValidateOTP = () => {
    const [inputArr, setInputArr] = useState(new Array(OTP_LENGTH).fill(""));
    const refArr = useRef([]);

    useEffect(()=> {
        refArr.current[0]?.focus();
    },[]);

    const handleOnChange = (value,index) => {
        if(isNaN(value)) return;
        const newValue = value.trim().slice(-1);
        const newArr = [...inputArr];
        newArr[index] = newValue;
        setInputArr(newArr);
        index<inputArr.length && newValue && refArr.current[index+1]?.focus();
    }

    const handleKeyDown = (event, index) => {
        if(event.key==='Backspace' && !event.target.value) {
            index>0 && refArr.current[index-1]?.focus();
        }
    }

    const handleSubmit = () => {
        const otpFilled = inputArr.every(value => value!=='');
        if(otpFilled){
            alert(`Entered OTP is: ${inputArr.join('')}`);
            return;
        }
        alert('Please enter all digits in OTP!');
    }

    return (<div className="otp-validation">
        <h1>Validate OTP</h1>
        {inputArr.map((value,index) => {
           return  <input  key={index} className="otp-input"
                            type="text" 
                            value={value}
                            ref= {value => refArr.current[index]=value}
                            onChange={(e) => handleOnChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)} />
        })}
        <button className="otp-submit-button" onClick={handleSubmit}>Verify</button>
    </div>)
}

export default ValidateOTP;