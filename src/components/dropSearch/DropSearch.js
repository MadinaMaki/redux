import {useState} from "react";
import "./style.css"

function DropSearch(props) {
    const [expanded, setExpanded] = useState(false);

    const [items, setItems] = useState(
        props.items.map(function (item) {
            return { name: item }
        })
    );

    const [object, setObject] = useState([]);

    const [formData, setFormData] = useState('');

    function dropDown() {
        setExpanded(function () {
            return !expanded;
        })
    }
    function chooseItem(index) {
        setItems(function (prevItems) {
            let newItems = [...prevItems];
            setObject(function (){
                newItems[index].selected = !newItems[index].selected;
            })
            return newItems;
        })
    }
    let dropLabel = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].selected === true) {
            dropLabel.push(<div key={i}>{items[i].name}</div>)
        }
    }
    if (dropLabel.length === 0) {
        dropLabel = <div>Choose country</div>
    }

    function searching(event) {
        setFormData(function () {
            return event.target.value;
        });
    }

    return (
        <div className="main">
            <div className="dropDown" onClick={() => dropDown()}>{dropLabel}</div>
            <div style={{
                display: expanded === false ? "none" : "flex",
                flexDirection: "column"
            }}>
                <input className="search" placeholder="Search" value={formData} onChange={searching}/>
                {items.map(function (item, index) {
                    if (item.name.includes(formData)) {
                        return (
                            <div key={index}
                                 className="list"
                                 onClick={() => chooseItem(index)}>
                                <div>{item.name}</div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default DropSearch;
