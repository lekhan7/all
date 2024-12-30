
import React, {useState} from 'react';
function Colorpicker() {
    const [color,setColor] =useState("#fffff");

    function handelcolorchange(e){
        setColor(event.target.value);
    }
  return (
    <>
    <div className="color-picker-countainer">
        <h1>
            color picker 
        </h1>
        <div className="colorp-dis" style={{backgroundColor:color}}>
<p>
    selected color:{color}
</p>
        </div>
<label>  select a color:</label>
<input type="color"  value={color} onChange={handelcolorchange}/>
    </div>
    </>
  );
}

export default Colorpicker