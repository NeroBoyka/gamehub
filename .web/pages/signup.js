import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Avatar, Box, Button, Center, HStack, Heading, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack, useColorMode} from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"

const EVENT = "ws://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"auth_state": {"confirm_password": "", "password": ""}, "logged_in": false, "username": "", "events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const socket = useRef(null)
const { isReady } = router;
const { colorMode, toggleColorMode } = useColorMode()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  if(!isReady) {
    return;
  }
  const reconnectSocket = () => {
    socket.current.reconnect()
  }
  if (typeof socket.current !== 'undefined') {
    if (!socket.current) {
      window.addEventListener('focus', reconnectSocket)
      connect(socket, state, setState, result, setResult, router, EVENT)
    }
  }
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, setState, result, setResult, router, socket.current)
  }
  update()
})
return (
<Box sx={{"paddingTop": "10em", "textAlign": "top", "position": "relative", "backgroundImage": "bg.svg", "backgroundSize": "100% auto", "width": "100%", "height": "100vh"}}><VStack><Box sx={{"position": "fixed", "width": "100%", "top": "0px", "zIndex": "500"}}><HStack justify="space-between"
sx={{"borderBottom": "0.2em solid #F0F0F0", "paddingX": "2em", "paddingY": "1em", "bg": "rgba(255,255,255, 1)"}}><NextLink href="/"
passHref={true}><Link><HStack><Image src="favicon.ico"/>
<Heading>{`GameHub`}</Heading></HStack></Link></NextLink>
<Menu><MenuButton>{state.logged_in ? <Avatar name={state.username}
size="md"/> : <Box/>}</MenuButton>
<MenuList><Center><VStack><Avatar name={state.username}
size="md"/>
<Text>{state.username}</Text></VStack></Center>
<MenuDivider/>
<NextLink href="#"
passHref={true}><Link onClick={() => Event([E("state.logout", {})])}><MenuItem>{`Sign Out`}</MenuItem></Link></NextLink></MenuList></Menu></HStack></Box>
<Center sx={{"shadow": "lg", "padding": "1em", "borderRadius": "lg", "background": "white"}}><VStack><Heading sx={{"fontSize": "1.5em"}}>{`Sign Up`}</Heading>
<Input type="text"
placeholder="Username"
onBlur={(_e) => Event([E("state.set_username", {value:_e.target.value})])}
sx={{"width": "100%"}}/>
<Input type="text"
placeholder="Password"
onBlur={(_e) => Event([E("state.auth_state.set_password", {value:_e.target.value})])}
sx={{"width": "100%"}}/>
<Input type="text"
placeholder="Confirm Password"
onBlur={(_e) => Event([E("state.auth_state.set_confirm_password", {value:_e.target.value})])}
sx={{"width": "100%"}}/>
<Button onClick={() => Event([E("state.auth_state.signup", {})])}
sx={{"width": "100%"}}>{`Sign Up`}</Button></VStack></Center></VStack>
<NextHead><title>{`Pynecone App`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></Box>
)
}