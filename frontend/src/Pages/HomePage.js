import React from 'react'
import { useState } from 'react'
import { Container , Box , Text , Flex ,Stack , Tab , TabList , Tabs ,TabPanel, TabPanels} from '@chakra-ui/react'
//import { HomeLayout } from '../Components/Layouts/HomeLayout'
import { Button, ButtonGroup , Checkbox , Link , InputGroup , Input , InputLeftElement , InputRightElement} from '@chakra-ui/react'
import { FaUserTie } from 'react-icons/fa'
import { FaUserPlus , FaPhone , FaEnvelope , FaEyeSlash , FaEye} from 'react-icons/fa'

function PasswordInput({placeholder}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? <FaEye/> : <FaEyeSlash/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

function TermsCheckbox(){
  const [isChecked , setIsChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return(
    <>
      <Checkbox
        isChecked = {isChecked}
        onChange = {handleCheckboxChange}
        colorScheme = "teal"
        >
          <Text>
            I agree to the{' '}
            <Link color = "teal.400" href = "#" target = "_blank">
              Terms and Conditions
              </Link>
          </Text>
      </Checkbox>
    </>
  )
}

const HomePage = () => {
  return (
    <Flex>
      <Container d="Flex" maxW = 'xl' centerContent>
      <Box d='flex'
           justifyContent = 'center'
           p = {3}
           bg = {'rgb(148, 142, 142)'}
           w = '500px'
           m = '40px 0 15px 0'
           borderRadius = '3px'
           borderWidth = '1px'>

        <Text  fontSize='4xl' color='lightgreen' fontFamily = 'Nunito'>Let's Talk</Text>
      </Box>
      <Box bg = "white" w = "100%" p = {2} borderRadius = "3px" borderWidth = "1px">
        {/* <Stack direction = 'row' spacing = {4} w = '500px'>
          <Button leftIcon = {<FaUserTie/>} colorScheme = 'teal' variant = 'outline'
          _hover={{ bg: 'teal.200', color: 'white' }} flex = "1"
          borderWidth = "0">Log In</Button>

          <Button leftIcon = {<FaUserPlus/>} colorScheme = 'teal' variant = 'outline'
          _hover={{ bg: 'teal.200', color: 'white' }} flex = "1"
          borderWidth = "0">Sign Up</Button>
        </Stack> */}

        <Tabs variant = 'soft-rounded' colorScheme = 'green'>

          <TabList spacing = {4}>

            <Tab flex = '1'>Log In</Tab>
            <Tab flex = '1'>Sign Up</Tab>

          </TabList>

          <TabPanels>
            <TabPanel>
                <Container>

                      <Stack spacing = {4}>
                        <InputGroup>
                          {/* <InputLeftElement
                            pointerEvents = "none"
                          >
                            <FaEnvelope color = "gray.100"/>
                          </InputLeftElement> */}
                          <Input type = "email" placeholder = "Email Address"/>
                        </InputGroup>

                        <PasswordInput placeholder = "Password"/>
                        
                      </Stack>

                </Container>
            </TabPanel>
            <TabPanel>
              <Container>

                  <Stack spacing = {4}>
                    <InputGroup>
                      {/* <InputLeftElement
                        pointerEvents = "none"
                      >
                        <FaEnvelope color = "gray.100"/>
                      </InputLeftElement> */}
                      <Input type = "email" placeholder = "Email Address"/>
                    </InputGroup>
                    <InputGroup>
                      <Input type = "name" placeholder = "First Name"></Input>

                    </InputGroup>
                    <InputGroup>
                      <Input type = "name" placeholder = "Last Name"></Input>

                    </InputGroup>
                    <PasswordInput placeholder = "Enter Password"/>
                    <PasswordInput placeholder = "Confirm Password"/>
                    
                    <TermsCheckbox/>

                  </Stack>

              </Container>
            </TabPanel>
          </TabPanels>

        </Tabs>
        
        {/* <Container>

            <Stack spacing = {4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents = "none"
                >
                  <FaEnvelope color = "gray.100"/>
                </InputLeftElement>
                <Input type = "email" placeholder = "Email Address"/>
              </InputGroup>

              <PasswordInput/>
              
            </Stack>

        </Container> */}

      </Box>
    </Container>
    <Container>
      giujhkjhk
    </Container>
    
    </Flex>
  )
}

export default HomePage
