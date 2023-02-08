import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AddButton, ItemWrapper } from "./AddItem.styles";

interface Props {
	addNewItem: (descrption: string) => void;
}

const AddItem = ({ addNewItem }: Props) => {
	const [inputValue, setInputValue] = useState<string>("");

	const onChange = (value: string) => setInputValue(value);

	const onClick = () => {
		addNewItem(inputValue);
		setInputValue("");
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" && inputValue) {
			addNewItem(inputValue)
			setInputValue("");
		} else if (event.key === "Enter") {
			alert("You can't add empty task!");
		}
	};

	return (
		<>
			<ItemWrapper>
				<TextField
					id="outlined-basic"
					variant="outlined"
					value={inputValue}
					onKeyDown={onKeyDown}
					onChange={(event) => onChange(event.target.value)}
					placeholder="Add new task"
				/>
				<AddButton
					disabled={inputValue.length < 1}
					onClick={onClick}
					type="button"
					variant="contained"
					size="small"
				>
					Add
				</AddButton>
			</ItemWrapper>
		</>
	);
};

export default AddItem;
