import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Well done !, Converted to uppercase.","success")
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Well done !, Converted to lowercase.","success")
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked")
        let newText=''
        if(window.confirm("Are You Sure?")){
            setText(newText)
            props.showAlert("Great Job !, you clear the text.","success")
        }
        
    }
    // const handleInvClick=()=>{
    //     // console.log("Uppercase was clicked")
    //     let newText=text
    //     setText(newText)
    // }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const fun=()=>{
        let arr=text.split(' ');
        let sz=arr.length-1
        let i=0
        let cnt=0
        for(i=sz;i>=0;i--){
            if(arr[i]===' '|| arr[i]==='')
            continue
            else
            cnt++
        }
        return cnt
    }
    
    const[text,setText]=useState('Enter the text here')
  return (
    <>
        <div className='container'style={{color:props.mode==='dark'?'white':'black'}} >
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert in UpperCase</button>
            <button className="btn btn-outline-success mx-1"  onClick={handleLoClick}>Convert in LowerCase</button>
            <button className="btn btn-outline-danger mx-1"  onClick={handleClearClick}>Clear Text</button>
             {/* <button className="btn btn-primary mx-1"  onClick={handleInvClick}>Inverse Case</button>  */}
            
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Yours Text Summary</h2>
            
            <p><strong>{fun()} Words and {text.length} characters</strong></p>
            <p>{0.008* fun()} Minutes</p>
        </div>

    </>
    
  )
}
