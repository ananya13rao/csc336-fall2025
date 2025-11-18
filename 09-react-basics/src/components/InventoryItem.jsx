import "./InventoryItem.css"


function InventoryItem({item}) {
    return (
        <li
        style={
            {
                textDecoration: item.amount === 0 ? "line-through" : "none"
            }
        }>
            {}
            {item.name} - x{item.amount}
        </li>
    )
}

export default InventoryItem; 