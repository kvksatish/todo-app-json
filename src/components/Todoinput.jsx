import React from 'react'
import {InputGroup} from '@chakra-ui/react'
import styles from './input.module.css'
import {Input} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react'



const Todoinput = ({addTodo}) => {
    const [input, setinput] = useState("")

    const handleChange = (e)=>{
        setinput(e.target.value)
    }
  return (
    <div className={styles.inputbar}>
      <InputGroup  mx='auto' width='md' size='md' >
    <Button mx='1'  onClick={()=>{console.log(input) 
        addTodo(input) }} ><AddIcon  cursor='pointer' /></Button>
    <Input pr='4.5rem'
        type="text"
        color='white'
       
        backgroundColor='green'
        onChange={handleChange} placeholder='Add to to-do...' />
  </InputGroup>
    </div>
  )
}

export default Todoinput