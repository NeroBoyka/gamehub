import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Avatar, Box, Center, HStack, Heading, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack, useColorMode} from "@chakra-ui/react"
import NextLink from "next/link"
import {calendar, star} from "@chakra-ui/icons"
import NextHead from "next/head"

const EVENT = "ws://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"auth_state": {"confirm_password": "", "password": ""}, "home_state": {"games": [{"url": "https://opencritic.com/game/2848/inside", "percentRecommended": 94, "numReviews": 167, "topCriticScore": 91.01639344262296, "tier": "Mighty", "name": "INSIDE", "id": 2848, "firstReleaseDate": "2016-06-29T00:00:00.000Z"}, {"url": "https://opencritic.com/game/2842/forza-horizon-3", "percentRecommended": 96, "numReviews": 130, "topCriticScore": 90.97916666666667, "tier": "Mighty", "name": "Forza Horizon 3", "id": 2842, "firstReleaseDate": "2016-09-27T00:00:00.000Z"}, {"url": "https://opencritic.com/game/9753/dota-2", "percentRecommended": 100, "numReviews": 17, "topCriticScore": 90.8125, "tier": "Mighty", "name": "Dota 2", "id": 9753, "firstReleaseDate": "2013-07-09T00:00:00.000Z"}, {"url": "https://opencritic.com/game/13232/freshly-frosted", "percentRecommended": 90, "numReviews": 11, "topCriticScore": 90.6, "tier": "Mighty", "name": "Freshly Frosted", "id": 13232, "firstReleaseDate": "2022-06-10T00:00:00.000Z"}, {"url": "https://opencritic.com/game/7403/ori-and-the-will-of-the-wisps", "percentRecommended": 98, "numReviews": 175, "topCriticScore": 90.49074074074075, "tier": "Mighty", "name": "Ori and the Will of the Wisps", "id": 7403, "firstReleaseDate": "2020-03-11T00:00:00.000Z"}, {"url": "https://opencritic.com/game/14097/8-bit-adventures-2", "percentRecommended": -1, "numReviews": 4, "topCriticScore": 90.33333333333333, "tier": "Mighty", "name": "8-Bit Adventures 2", "id": 14097, "firstReleaseDate": "2023-01-31T00:00:00.000Z"}, {"url": "https://opencritic.com/game/1673/overwatch", "percentRecommended": 95, "numReviews": 138, "topCriticScore": 90.31481481481481, "tier": "Mighty", "name": "Overwatch", "id": 1673, "firstReleaseDate": "2016-05-24T00:00:00.000Z"}, {"url": "https://opencritic.com/game/288/rayman-legends", "percentRecommended": 97, "numReviews": 76, "topCriticScore": 90.05072463768116, "tier": "Mighty", "name": "Rayman Legends", "id": 288, "firstReleaseDate": "2013-09-03T00:00:00.000Z"}, {"url": "https://opencritic.com/game/829/ori-and-the-blind-forest", "percentRecommended": 96, "numReviews": 96, "topCriticScore": 89.96052631578948, "tier": "Mighty", "name": "Ori and the Blind Forest", "id": 829, "firstReleaseDate": "2015-03-11T00:00:00.000Z"}, {"url": "https://opencritic.com/game/9593/crusader-kings-iii", "percentRecommended": 98, "numReviews": 91, "topCriticScore": 89.91666666666667, "tier": "Mighty", "name": "Crusader Kings III", "id": 9593, "firstReleaseDate": "2020-09-01T00:00:00.000Z"}, {"url": "https://opencritic.com/game/12947/norco", "percentRecommended": 96, "numReviews": 30, "topCriticScore": 89.84375, "tier": "Mighty", "name": "NORCO", "id": 12947, "firstReleaseDate": "2022-03-25T00:00:00.000Z"}, {"url": "https://opencritic.com/game/6630/sekiro-shadows-die-twice", "percentRecommended": 96, "numReviews": 174, "topCriticScore": 89.82758620689656, "tier": "Mighty", "name": "Sekiro: Shadows Die Twice", "id": 6630, "firstReleaseDate": "2019-03-22T00:00:00.000Z"}, {"url": "https://opencritic.com/game/14083/dwarf-fortress", "percentRecommended": 88, "numReviews": 12, "topCriticScore": 89.8, "tier": "Mighty", "name": "Dwarf Fortress", "id": 14083, "firstReleaseDate": "2022-12-06T00:00:00.000Z"}, {"url": "https://opencritic.com/game/194/minecraft", "percentRecommended": 84, "numReviews": 44, "topCriticScore": 89.73809523809524, "tier": "Mighty", "name": "Minecraft", "id": 194, "firstReleaseDate": "2017-09-20T00:00:00.000Z"}, {"url": "https://opencritic.com/game/7898/monster-hunter-world-iceborne", "percentRecommended": 96, "numReviews": 114, "topCriticScore": 89.69072164948453, "tier": "Mighty", "name": "Monster Hunter World: Iceborne", "id": 7898, "firstReleaseDate": "2019-09-06T00:00:00.000Z"}, {"url": "https://opencritic.com/game/4903/monster-hunter-world", "percentRecommended": 96, "numReviews": 187, "topCriticScore": 89.68085106382979, "tier": "Mighty", "name": "Monster Hunter World", "id": 4903, "firstReleaseDate": "2018-01-26T00:00:00.000Z"}, {"url": "https://opencritic.com/game/1520/dark-souls-iii", "percentRecommended": 93, "numReviews": 165, "topCriticScore": 89.64963503649635, "tier": "Mighty", "name": "Dark Souls III", "id": 1520, "firstReleaseDate": "2016-04-12T00:00:00.000Z"}, {"url": "https://opencritic.com/game/13083/the-stanley-parable-ultra-deluxe", "percentRecommended": 100, "numReviews": 40, "topCriticScore": 89.6470588235294, "tier": "Mighty", "name": "The Stanley Parable: Ultra Deluxe", "id": 13083, "firstReleaseDate": "2022-04-27T00:00:00.000Z"}, {"url": "https://opencritic.com/game/13251/neon-white", "percentRecommended": 98, "numReviews": 71, "topCriticScore": 89.63636363636364, "tier": "Mighty", "name": "Neon White", "id": 13251, "firstReleaseDate": "2022-06-15T00:00:00.000Z"}, {"url": "https://opencritic.com/game/4002/hollow-knight", "percentRecommended": 98, "numReviews": 67, "topCriticScore": 89.60526315789474, "tier": "Mighty", "name": "Hollow Knight", "id": 4002, "firstReleaseDate": "2017-02-24T00:00:00.000Z"}]}, "logged_in": false, "username": "", "events": [{"name": "state.hydrate"}]})
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
<Box><VStack sx={{"paddingTop": "6em"}}><Box sx={{"position": "fixed", "width": "100%", "top": "0px", "zIndex": "500"}}><HStack justify="space-between"
sx={{"borderBottom": "0.2em solid #F0F0F0", "paddingX": "2em", "paddingY": "1em", "bg": "rgba(255,255,255, 1)"}}><NextLink passHref={true}
href="/"><Link><HStack><Image src="favicon.ico"/>
<Heading>{`GameHub`}</Heading></HStack></Link></NextLink>
<Menu><MenuButton>{state.logged_in ? <Avatar size="md"
name={state.username}/> : <Box/>}</MenuButton>
<MenuList><Center><VStack><Avatar size="md"
name={state.username}/>
<Text>{state.username}</Text></VStack></Center>
<MenuDivider/>
<NextLink passHref={true}
href="#"><Link onClick={() => Event([E("state.logout", {})])}><MenuItem>{`Sign Out`}</MenuItem></Link></NextLink></MenuList></Menu>
<HStack><Input type="text"
placeholder="Search something..."/>
<calendar/></HStack></HStack></Box>
<Heading>{`Popular Games`}</Heading>
<Text>{`Don't miss the most popular games on OpenCritics today`}</Text>
<HStack>{state.home_state.games.map((urttmsco, i) => <NextLink passHref={true}
href="#"
key={i}><Link sx={{"width": "150px", "height": "auto", "border": "4px solid #ccc", "transition": "transform .2s", "_hover": {"transform": "scale(1.25)"}}}><VStack sx={{"href": urttmsco.url, "padding": "5px"}}><Image src="/momy.jpg"
sx={{"width": "130px", "height": "180px", "border": "2px solid #ccc", "boxShadow": "0 0 5px rgba(0,0,0,0.3)", "borderRadius": "5px"}}/>
<Text>{urttmsco.numReviews}</Text>
<HStack><star/>
<Text>{`urttmsco`}</Text></HStack></VStack></Link></NextLink>)}</HStack></VStack>
<NextHead><title>{`Pynecone App`}</title>
<meta name="description"
content="A Pynecone app."/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Box>
)
}