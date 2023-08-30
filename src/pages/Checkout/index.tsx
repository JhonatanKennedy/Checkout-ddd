import { CheckoutTemplate, CheckoutTemplateType } from "./template";

export const Checkout = () => {
    const checkoutTemplate: CheckoutTemplateType = {
        itemManagement: {
            onBuyItem: (e) => console.log(e),
            onDeleteItem: (e) => console.log(e),
            onEdit: (e) => console.log(e),
            items: [
                { name: "item 1" },
                { name: "item 2" },
                { name: "item 3" },
                { name: "item 4" },
                { name: "item 5" },
                { name: "item 6" },
                { name: "item 7" },
            ],
        },
    };

    return (
        <div>
            <CheckoutTemplate {...checkoutTemplate} />
        </div>
    );
};
