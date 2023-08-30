import { Item } from "../Item";

export type ItemsTableProps = {
    items: Array<{ name: string }>;
    onDeleteItem: (id: string) => void;
    onBuyItem: (id: string) => void;
    onEdit: (id: string) => void;
};

export const ItemsTable = (props: ItemsTableProps) => {
    const handleDelete = (id: string) => {
        props.onDeleteItem(id);
    };

    const handleBuy = (id: string) => {
        props.onDeleteItem(id);
    };

    const handleEdit = (id: string) => {
        props.onEdit(id);
    };

    return (
        <div>
            {props.items.map((item, index) => (
                <Item
                    key={`item-table-${index}`}
                    name={item.name}
                    onDelete={() => handleDelete(item.name)}
                    onBuy={() => handleBuy(item.name)}
                    onEdit={() => handleEdit(item.name)}
                />
            ))}
        </div>
    );
};
