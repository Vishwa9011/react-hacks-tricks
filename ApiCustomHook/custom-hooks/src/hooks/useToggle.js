import { useState } from "react"


const useToggle = (initialState) => {
     const [value, setValue] = useState(initialState)

     const toggleValue = () => {
          setValue(v => !v);
     }

     return [value, toggleValue];

     // * if you are returning the array that time you can use this multiple time with value names in value application file;
     // * but if you return an object that time you can use only once these functions in your file

}
export default useToggle;