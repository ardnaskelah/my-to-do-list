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

    const onKeyDown = (event:any)=>{
        if(event.key==="Enter"){
            addNewItem(inputValue)
        }
        
    }

	return (
		<>
			<input value={inputValue} onKeyDown={onKeyDown}  onChange={(event)=>onChange(event.target.value)} placeholder="Add new item" />
			<button disabled={inputValue.length<1}  onClick={onClick} type="button"> Add  </button>
		</>
	);
};

export default AddItem;
