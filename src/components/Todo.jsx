import React from 'react'
import Todoitem from './Todoitem'
import Todolist from './Todolist'
import { useState } from 'react'
import Todoinput from './Todoinput'
import axios from 'axios'
import styles from './input.module.css'
import Todocompleted from './Todocompleted'
import Todocompitem from './Todocompitem'
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'



const Todo = () => {
   
    const [todos, setTodo] = useState([])
    const [comp, setComp] = useState([])
    const [showres, setShowres] = useState(false)
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [countcomp, setCountcomp] = useState(0)
    const [pagecomp, setPagecomp] = useState(1)
    

    const deleteTodo=(value)=>{
        console.log(value)
     axios.delete(`http://localhost:8080/Todo/${value}`)
     .then(()=>{

       RenData()
     })
     
    }

    

    useEffect(() => {
    axios.get(`http://localhost:8080/Todo?_page=${page}&_limit=4`)
    .then((r)=>{setTodo(r.data)
    console.log(r.data)
    setCount(Number(r.headers['x-total-count']))
    
  })
   
  }, [page])

const comprendata=()=>{
    
    axios.get(`http://localhost:8080/Completed?_page=${pagecomp}&_limit=4`)
    .then((r)=>{
        setComp(r.data)
    console.log(r.data)
    setCountcomp(Number(r.headers['x-total-count']))
    })

    }
  useEffect(() => {
    axios.get(`http://localhost:8080/Completed?_page=${pagecomp}&_limit=4`)
    .then((r)=>{setComp(r.data)
    console.log(r.data)
    setCountcomp(Number(r.headers['x-total-count']))
  })
   
  }, [pagecomp])

    const addTodo=(newtodo)=>{
        

      axios.post('http://localhost:8080/Todo', {
    text: newtodo,
  })
  .then(function (response) {
    console.log(response) 
    RenData() 
    
  })
  .catch(function (error) {
    console.log(error);
  });
  
    }
    
    const handleCompleted = (completed)=>{
        axios.post('http://localhost:8080/Completed', {
    text: completed,
  })
  .then(function (response) {
    console.log(response) 
    RenData()
   
    
  })
  .catch(function (error) {
    console.log(error);
  });
    }

    const RenData = ()=>{
    //     
    // .then((r)=>{setTodo(r.data)
    // 
    // 
    axios.get(`http://localhost:8080/Todo?_page=${page}&_limit=4`)
        .then((r)=>{
            setTodo(r.data)
            console.log(r.data)
            setCount(Number(r.headers['x-total-count']))
            console.log(count);
        })
    }

    const deleteTodocomp=(value)=>{
        console.log(value)
     axios.delete(`http://localhost:8080/Completed/${value}`)
     .then(()=>{

       comprendata()
     })
        
    }
  return (
    <div >
       <div className={styles.container}>
        <Todoinput addTodo={addTodo} />
        <Todolist>
            {todos.map((ele)=>{
              return <Todoitem id={ele.id} key={ele.id} value={ele.text} deleteTodo={deleteTodo} handleCompleted={handleCompleted}  />
        })}
        <button disabled={page<=1} onClick={()=>setPage(page - 1)} >-</button>
    <button disabled={page*4 > count} onClick={()=>setPage(page + 1)} >+</button>
        </Todolist>
        
        
      
         
    </div>

        <Button mt='10' onClick={()=>{
            setShowres(!showres)
            
        }} >{ showres ? "Hide Completed To-do's" : "Show Completed To-do's"}</Button>
    {showres ? <div className={styles.completed}>
        <Todocompleted>
            {comp.map((ele)=>{
                return <Todocompitem id={ele.id} key={ele.id} value={ele.text} deleteTodocomp={deleteTodocomp}/>
            })}

            <button disabled={pagecomp<=1} onClick={()=>setPagecomp(pagecomp - 1)} >-</button>
    <button disabled={pagecomp*4 > countcomp} onClick={()=>setPagecomp(pagecomp + 1)} >+</button>
            
        </Todocompleted>
    </div> : null }
    
    </div>
  )
}

export default Todo