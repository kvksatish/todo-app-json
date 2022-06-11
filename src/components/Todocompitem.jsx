
import React from 'react'

import { Tag } from '@chakra-ui/react'
import { TagLabel } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'




const Todoitem = ({value,deleteTodocomp,id}) => {
  return (
    <div>
   

    <Tag
      mx='auto' width='md'
      size='lg'
      key='lg'
      marginTop='2'
      borderRadius='md'
      variant='solid'
      backgroundColor='white'
      color='black'
      display='flex'
      
      justifyContent='space-between'
      
    >
       
    <Checkbox isDisabled defaultChecked colorScheme='green'>
      
    <TagLabel  ml='2'>  <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}  > {value}</span></TagLabel>
  </Checkbox>
      

               <Button  backgroundColor='white'
      color='black' onClick={()=>{
      deleteTodocomp(id)
    console.log(id)}}>
        <CloseIcon/>
    </Button>
            
      </Tag>
      
     </div>
     
  )
}

export default Todoitem