import { ItemsTable } from "@/components/ItemsTable/index.tsx";

export type ItemManagementType = {
    items: Array<{ name: string }>;
    onBuyItem: (id: string) => void;
    onDeleteItem: (id: string) => void;
    onEdit: (id: string) => void;
};

export const ItemManagement = (props: ItemManagementType) => {
    return (
        <div>
            <ItemsTable
                items={props.items}
                onBuyItem={props.onBuyItem}
                onDeleteItem={props.onDeleteItem}
                onEdit={props.onEdit}
            />
        </div>
    );
};
