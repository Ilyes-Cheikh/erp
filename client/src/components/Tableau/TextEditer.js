import React, { useEffect, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import Spacer from 'react-add-space'
import '../../assets/css/textediter.css'

export default function TextEditer(props) {
    const myRef = React.useRef()
    const [val, setVal] = useState(props.defaultValue)
    const [listed, setlisted] = useState([])
    useEffect(() => {
        setVal(props.defaultValue)
        setlisted(props.listed)
    })
    const separater=(x)=>{
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const [click, setClick] = useState(false)
    const trueSetter=async()=>
    {
        await setClick(true)
        myRef.current.focus()
        myRef.current.select()
    }
    const falseSetter=()=>click? setClick(false): true
    const handleKeypress = e => {
      if (e.charCode === 13) {
        setClick(false)
      }
    }
    const edit=(event)=>
    {
        if(props.type==='number')
            setVal(parseInt(event.target.value))
        else
            setVal(event.target.value)
        props.handleChange(event.target.value,props.change,props.tabIndex,props.ligneIndex)
    }
    return (
            <>
                <ClickAwayListener onClickAway={falseSetter}>
                    <div onClick={()=>props.trueSetter? false:trueSetter()} className="text-editer-container">
                        <span style={{display: click? "none":""}} className="text">
                            {(val||val===0)? !props.nonSep? separater(val):val : <Spacer amount={1}/>}</span>
                        <input type={props.type} className="text-input" ref={myRef} onKeyPress={(event)=>handleKeypress(event)} style={{display: !click? "none":""}} onChange={(event)=>edit(event)} name={props.name} value={val} list={props.listId? props.listId:''}/>
                        <datalist id={props.listId}>
                            {
                                listed? listed.map((el) =><option value={el}/>):'h'
                            }
                        </datalist>
                    </div>
                </ClickAwayListener>

    
        </>
    )
}
