function ButtonDemo()
{

    function handleDoubleClick()
    {
        window.open("m1.jpg","Mobile Image","width=400,height=400");
    }
    function handleContextMenu()
    {
        document.oncontextmenu=function()
        {
            alert("Right click is disabled");
            return false;
        }
    }
    return(
        <div className=" container-fluid" onContextMenu={handleContextMenu}>
            <h2>Button Events</h2>
            <img src="m1.jpg" width="150" height="150" onDoubleClick={handleDoubleClick} />
           <p>double click to view large image</p>
        </div>
    )
}
export default ButtonDemo;