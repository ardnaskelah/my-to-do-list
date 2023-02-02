import { useState } from "react";
import { ToDoItem } from "./App";

interface Props {
	item: ToDoItem;
	handleRemove: (index: number) => void;
	index: number;
	onEdit: (index: number, input: string) => void;
}

const ListItem = ({ item, index, handleRemove, onEdit }: Props) => {
	const [editMode, setEditMode] = useState<Boolean>(false);
	const [editedItem, setEditedItem] = useState<string>("");

	const handleEditing = () => {
		setEditMode(true);
		setEditedItem(item.description);
	};

	const itemEdit = (value: string) => {
		setEditedItem(value);
		console.log(editedItem);
	};

	const onKeyDown = (event: any) => {
		if (event.key === "Enter") {
			onEdit(index, editedItem);
			setEditMode(false);
		}
	};

	return (
		<li>
			{" "}
			<div>
				<input placeholder="checkbox" type="checkbox" />
				{!editMode && item.description}
				{editMode && (
					<input
						placeholder="text"
						type="text"
						value={editedItem}
						onChange={(event) => {
							itemEdit((event.target as HTMLInputElement).value);
						}}
						onKeyDown={(event) => onKeyDown(event)}
					/>
				)}
				{!editMode && (
					<>
						<button type="button" onClick={() => handleRemove(index)}>
							Remove
						</button>
						<button type="button" onClick={handleEditing}>
							Edit
						</button>
					</>
				)}
			</div>
		</li>
	);
};

export default ListItem;
