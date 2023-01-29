import { useState } from "react";


interface Props {
    addNewItem: (descrption:string) => void;
}


const AddItem = ({addNewItem}:Props) => {
    const [inputValue, setInputValue] = useState<string>("")

    const onChange = (value:string) => setInputValue(value)
    

    const onClick = () => {
        addNewItem(inputValue)
        setInputValue("")
    }

	return (
		<>
			<input value={inputValue} onChange={(event)=>onChange(event.target.value)} placeholder="Add new item" />
			<button disabled={inputValue.length<1} onClick={onClick} type="button"> Add  </button>
		</>
	);
};

export default AddItem;
