import { Button } from "../Button";

type ItemType = {
    name: string;
    onBuy: () => void;
    onDelete: () => void;
    onEdit: () => void;
};

export const Item = (props: ItemType) => {
    return (
        <div>
            <Button onClick={props.onEdit}>{props.name}</Button>
            <span>Preço</span>
            <Button onClick={props.onBuy}>Comprar</Button>
            <Button onClick={props.onDelete}>Tirar</Button>
        </div>
    );
};
