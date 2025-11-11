import "./MobItem.css"


function MobItem({mob}) {
    return (
        <li
        style={
            {
                textDecoration: mob.hostile ? "line-through" : "none"
            }
        }>
            {}
            {mob.name}
        </li>
    )
}

export default MobItem;