import { Cart } from "./components/cart";
import {
    ItemManagement,
    ItemManagementType,
} from "./components/itemManagement";

export type CheckoutTemplateType = {
    itemManagement: ItemManagementType;
};

export const CheckoutTemplate = (props: CheckoutTemplateType) => {
    return (
        <div>
            <ItemManagement {...props.itemManagement} />
            <Cart />
        </div>
    );
};
