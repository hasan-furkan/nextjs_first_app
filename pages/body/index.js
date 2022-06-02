
import { useState } from "react"
import styles from "../../styles/button.module.css";

export default function HomePage(){


  const [myList, setMyList] = useState([]);

  const [text, setText] = useState("");

  
  
  const handleCHangeText = (e) => {
    e.preventDefault()
    setText(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMyList([...myList, text]);
    setText("");
  }

  const handleRemove = (item) => {
      const updateList = myList.filter(myItem => myList.indexOf(myItem) !== myList.indexOf(item))

    setMyList(updateList)}

  return(
    <>
    
    <div className={styles.container}>
     
      <input type="text" 
      value={text}
      onChange={handleCHangeText}
      />
      
      <button
      className={styles.button}
      onClick={handleSubmit}>Kaydet</button>

    <ul>
      {myList.map((item, index) => {
        return <li key={index}>{item}<button className="button"
        onClick={(e)=>
        {
          e.preventDefault()
        handleRemove(item)
        }
        }
        >Delete</button></li>
        
      })}
    </ul>

    
    </div>
    
    <style jsx>

    {
      `
      .button {
        background-color: #4CAF50;
      }
      `
    }

    </style>
    </>

    

  )
}
