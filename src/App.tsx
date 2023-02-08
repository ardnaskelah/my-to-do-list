import { useState } from "react";
import AddItem from "./AddItem";
import TableItem from "./TableItem";
import List from "@mui/material/List";
import { AppWrapper, ListWrapper, StyledTypography } from "./App.styles";
import Paper from "@mui/material/Paper";
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

export interface ToDoItem {
	done: boolean;
	description: string;
}

function App() {
	const [itemList, setItemList] = useState<ToDoItem[]>([]);
	//useState bedzie trzymal tablice stirngow

	const addNewItem = (value: string) => {
		const findItem = itemList.find(
			(item) => item.description.toLowerCase() === value.toLowerCase()
		);

		if (findItem) {
			alert("Item is alredy in the list");
		} else {
			setItemList([...itemList, { description: value, done: false }]);
		}
	};

	const handleRemove = (index: number) => {
		setItemList(itemList.filter((item, filterIndex) => index !== filterIndex));
	};

	const onEdit = (index: number, newValue: string) => {
		const newArray = itemList.map((item, currentIndex) => {
			if (index !== currentIndex) {
				return item;
			}
			return { done: item.done, description: newValue };
		});
		setItemList(newArray);
	};

	return (
		<AppWrapper>
			<ListWrapper elevation={2}>
				<StyledTypography variant="h4"> TO DO LIST </StyledTypography>
				<AddItem addNewItem={addNewItem} />
				<List
					sx={{ width: "400px", bgcolor: "background.paper" }}
				>
					{itemList.map((item, index) => (
						<TableItem
							index={index}
							item={item}
							key={index}
							handleRemove={handleRemove}
							onEdit={onEdit}
						/>
					))}
					{itemList.length === 0 && <Alert severity="info">No Items</Alert>}
				</List>
			</ListWrapper>
		</AppWrapper>
	);
}

export default App;
