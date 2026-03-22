import { useRef, useState } from "react";

function DebounceDemo() {
  const [msg, setMsg] = useState(null);
  let thread = useRef();
  function v1() {
    setMsg("Volume increased by 20%");
  }

  function v2() {
    setMsg("Volume decreased by 60%");
  }
  function v3() {
    setMsg("Volume is full");
  }
  function handleButtonClick() {
    setTimeout(v1, 2000);
    thread.current = setTimeout(v2, 4000);
    setTimeout(v3, 6000);
  }
  
  function cancelV2() {
    clearTimeout(thread.current);
  }
  return (
    <div className="container-fluid">
      <div className="mt-3">
        <button
          className=" bi bi-volume-up btn btn-success"
          onClick={handleButtonClick}
        >
          {" "}
        </button>
        <button  className=" btn btn-danger" onClick={cancelV2}>{"Cancel V2"}</button>
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
export default DebounceDemo;
