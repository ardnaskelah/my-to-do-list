import { useState } from "react";
import { ToDoItem } from "../../App";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemStyled } from "./ListElement.styles";

interface Props {
	item: ToDoItem;
	handleRemove: (index: number) => void;
	index: number;
	onEdit: (index: number, input: string) => void;
	onDoneChange: (index: number) => void;
}

const ListElement = ({
	item,
	index,
	handleRemove,
	onEdit,
	onDoneChange,
}: Props) => {
	const [editMode, setEditMode] = useState<Boolean>(false);
	const [editedItem, setEditedItem] = useState<string>("");

	const handleEditing = () => {
		setEditMode(true);
		setEditedItem(item.description);
	};

	const itemEdit = (value: string) => {
		setEditedItem(value);
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter") {
			onEdit(index, editedItem);
			setEditMode(false);
		}
	};

	return (
		<ListItem
			secondaryAction={
				!editMode && (
					<>
						<IconButton edge="end">
							<EditIcon onClick={handleEditing} />
						</IconButton>
						<IconButton edge="end">
							<DeleteIcon onClick={() => handleRemove(index)} />
						</IconButton>
					</>
				)
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemIcon>
					<Checkbox
						onChange={() => onDoneChange(index)}
						edge="start"
						disableRipple
					/>
				</ListItemIcon>

				{!editMode && (
					<ListItemStyled done={item.done} primary={item.description} />
				)}
				{/* przez propsdone przekazuje  */}
				{editMode && (
					<ListItemText>
						<TextField
							id="outlined"
							variant="outlined"
							className="text"
							placeholder="text"
							type="text"
							value={editedItem}
							onChange={(event) => {
								itemEdit((event.target as HTMLInputElement).value);
							}}
							onKeyDown={(event) => onKeyDown(event)}
						/>
					</ListItemText>
				)}
			</ListItemButton>
		</ListItem>
	);
};

export default ListElement;
