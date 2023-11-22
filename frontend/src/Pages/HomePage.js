import React from 'react'
import { container , Box , Text  } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <container maxW = 'xl' centerContent>
      <Box d='flex'
           justifyContent = 'center'
           p = {3}
           bg = {'rgb(148, 142, 142)'}
           w = '500px'
           m = '40px 0 15px 0'
           borderRadius = '3'
           borderWidth = '1px'>

        <Text textAlign = 'center' fontSize='4xl' color='lightgreen' fontFamily = 'Nunito'>Let's Talk</Text>
      </Box>
    </container>
  )
}

export default HomePage
