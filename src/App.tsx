import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";

export interface ToDoItem {
	done: boolean;
	description: string;
}

function App() {
	const [itemList, setItemList] = useState<ToDoItem[]>([]);
	//useState bedzie trzymal tablice stirngow

	const addNewItem = (value: string) => {
    const findItem = itemList.find((item)=> item.description.toLowerCase() === value.toLowerCase())
    
    if (findItem) {
      alert("Item is alredy in the list") } else {
        (setItemList([...itemList, { description: value, done: false }]))
      }
	};

	const handleRemove = (index: number) => {
		setItemList(itemList.filter((item, filterIndex) => index !== filterIndex));
	};

	const onEdit = (index:number, newValue:string) => {
		const newArray = itemList.map((item,currentIndex) => {
			if (index !== currentIndex) {
				return item
			}
			return {done: item.done, description: newValue}
		})
		setItemList(newArray)
	}


	return (
		<div className="App">
			<h1> TO DO LIST</h1>
			<AddItem addNewItem={addNewItem} />
			<ol>
				{itemList.map((item, index) => (
					<ListItem
						index={index}
						item={item}
						key={index}
						handleRemove={handleRemove}
						onEdit={onEdit}
					/>
				))}
				{itemList.length ===0 && "No items"}
			</ol>
		</div>
	);
}

export default App;
