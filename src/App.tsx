import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import ListElement from "./components/ListElement/ListElement";
import {
	AppWrapper,
	ListWrapper,
	StyledTypography,
	StyledList,
} from "./App.styles";
import Alert from "@mui/material/Alert";

export interface ToDoItem {
	done: boolean;
	description: string;
}

function App() {
	const [itemList, setItemList] = useState<ToDoItem[]>([]);

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

	const onDoneChange = (index: number) => {
		const newArray = itemList.map((item, currentIndex) => {
			if (index !== currentIndex) {
				return item;
			}
			return { ...item, done: !item.done };
		});
		setItemList(newArray);
	};

	return (
		<AppWrapper>
			<ListWrapper elevation={2}>
				<StyledTypography variant="h4"> TO DO LIST </StyledTypography>
				<AddItem addNewItem={addNewItem} />
				<StyledList>
					{itemList.map((item, index) => (
						<ListElement
							index={index}
							item={item}
							key={index}
							handleRemove={handleRemove}
							onEdit={onEdit}
							onDoneChange={onDoneChange}
						/>
					))}
					{itemList.length === 0 && <Alert severity="info">No Items</Alert>}
				</StyledList>
			</ListWrapper>
		</AppWrapper>
	);
}

export default App;
