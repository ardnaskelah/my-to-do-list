import { ToDoItem } from "./App";

interface Props {
	item: ToDoItem;
    handleRemove: (index:number) => void;
    index: number;
}

const ListItem = ({ item, index, handleRemove }: Props) => {
	return (
		<li>
			{" "}
			<div>
				<input placeholder="checkbox" type="checkbox" />
				{item.description}
                <button onClick={() => handleRemove(index)}> Remove </button>
			</div>
		</li>
	);
};

export default ListItem;
