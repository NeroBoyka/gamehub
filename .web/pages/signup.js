import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Avatar, Box, Button, Center, HStack, Heading, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack, useColorMode} from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"

const EVENT = "ws://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"auth_state": {"confirm_password": "", "password": ""}, "home_state": {"games": [{"images": {"banner": {"og": "game/2848/o/AcXwIQOO.jpg", "sm": "game/2848/Wy3FCkZn.jpg"}}, "percentRecommended": 94.47852760736197, "numReviews": 167, "topCriticScore": 91.01639344262296, "tier": "Mighty", "name": "INSIDE", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2016-08-23T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2016-06-29T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2016-07-07T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 2848, "firstReleaseDate": "2016-06-29T00:00:00.000Z", "url": "https://opencritic.com/game/2848/inside"}, {"images": {"banner": {"og": "game/2842/o/nmfHTDYU.jpg", "sm": "game/2842/bvUDtIlF.jpg"}}, "percentRecommended": 96.8503937007874, "numReviews": 130, "topCriticScore": 90.97916666666667, "tier": "Mighty", "name": "Forza Horizon 3", "Platforms": [{"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2016-09-27T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2016-09-27T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}], "id": 2842, "firstReleaseDate": "2016-09-27T00:00:00.000Z", "url": "https://opencritic.com/game/2842/forza-horizon-3"}, {"images": {"banner": {"og": "game/9753/o/o33Fb42P.jpg", "sm": "game/9753/Hu44AneL.jpg"}}, "percentRecommended": 100, "numReviews": 17, "topCriticScore": 90.8125, "tier": "Mighty", "name": "Dota 2", "Platforms": [{"name": "PC", "shortName": "PC", "id": 27, "releaseDate": "2013-07-09T00:00:00.000Z"}], "id": 9753, "firstReleaseDate": "2013-07-09T00:00:00.000Z", "url": "https://opencritic.com/game/9753/dota-2"}, {"images": {"banner": {"og": "game/13232/o/fwRbzQjM.jpg", "sm": "game/13232/I2Ol1b2W.jpg"}}, "percentRecommended": 90.9090909090909, "numReviews": 11, "topCriticScore": 90.6, "tier": "Mighty", "Platforms": [{"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2022-06-10T00:00:00.000Z"}, {"id": 32, "name": "Nintendo Switch", "shortName": "Switch", "releaseDate": "2022-06-10T00:00:00.000Z"}, {"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2022-06-10T00:00:00.000Z"}], "name": "Freshly Frosted", "id": 13232, "firstReleaseDate": "2022-06-10T00:00:00.000Z", "url": "https://opencritic.com/game/13232/freshly-frosted"}, {"images": {"banner": {"og": "game/7403/o/vH9zF76C.jpg", "sm": "game/7403/GbpOVGsu.jpg"}}, "percentRecommended": 98.23529411764706, "numReviews": 175, "topCriticScore": 90.49074074074075, "tier": "Mighty", "name": "Ori and the Will of the Wisps", "Platforms": [{"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2020-03-11T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2020-03-11T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}], "id": 7403, "firstReleaseDate": "2020-03-11T00:00:00.000Z", "url": "https://opencritic.com/game/7403/ori-and-the-will-of-the-wisps"}, {"images": {"banner": {"og": "game/14097/o/ATo4ZqJA.jpg", "sm": "game/14097/efr05pdJ.jpg"}}, "percentRecommended": -1, "numReviews": 4, "topCriticScore": 90.33333333333333, "tier": "Mighty", "name": "8-Bit Adventures 2", "Platforms": [{"name": "PC", "shortName": "PC", "id": 27, "releaseDate": "2023-01-31T00:00:00.000Z"}], "id": 14097, "firstReleaseDate": "2023-01-31T00:00:00.000Z", "url": "https://opencritic.com/game/14097/8-bit-adventures-2"}, {"images": {"banner": {"og": "game/1673/o/6uqqDytB.jpg", "sm": "game/1673/4oIZP9CZ.jpg"}}, "percentRecommended": 95.52238805970148, "numReviews": 138, "topCriticScore": 90.31481481481481, "tier": "Mighty", "name": "Overwatch", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2016-05-24T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2016-05-24T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2016-05-24T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 1673, "firstReleaseDate": "2016-05-24T00:00:00.000Z", "url": "https://opencritic.com/game/1673/overwatch"}, {"images": {"banner": {"og": "game/288/o/Ad5UlpWj.jpg", "sm": "game/288/6gsKDPve.jpg"}}, "percentRecommended": 97.33333333333334, "numReviews": 76, "topCriticScore": 90.05072463768116, "tier": "Mighty", "name": "Rayman Legends", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2014-02-18T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2014-02-18T00:00:00.000Z"}, {"id": 26, "name": "Wii U", "shortName": "Wii-U", "releaseDate": "2013-09-03T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2013-09-03T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 288, "firstReleaseDate": "2013-09-03T00:00:00.000Z", "url": "https://opencritic.com/game/288/rayman-legends"}, {"images": {"banner": {"og": "game/829/o/Uc1GMw7E.jpg", "sm": "game/829/K2J443iA.jpg"}}, "percentRecommended": 96.80851063829788, "numReviews": 96, "topCriticScore": 89.96052631578948, "tier": "Mighty", "name": "Ori and the Blind Forest", "Platforms": [{"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2015-03-11T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2015-03-11T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}], "id": 829, "firstReleaseDate": "2015-03-11T00:00:00.000Z", "url": "https://opencritic.com/game/829/ori-and-the-blind-forest"}, {"images": {"banner": {"og": "game/9593/o/VKIq7GGZ.jpg", "sm": "game/9593/XHDnH9c7.jpg"}}, "percentRecommended": 98.83720930232558, "numReviews": 91, "topCriticScore": 89.91666666666667, "tier": "Mighty", "name": "Crusader Kings III", "Platforms": [{"id": 27, "shortName": "PC", "name": "PC", "releaseDate": "2020-09-01T00:00:00.000Z"}], "id": 9593, "firstReleaseDate": "2020-09-01T00:00:00.000Z", "url": "https://opencritic.com/game/9593/crusader-kings-iii"}, {"images": {"banner": {"og": "game/12947/o/aa2uXYMh.jpg", "sm": "game/12947/Gizf6vAJ.jpg"}}, "percentRecommended": 96.42857142857143, "numReviews": 30, "topCriticScore": 89.84375, "tier": "Mighty", "Platforms": [{"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2022-03-25T00:00:00.000Z"}], "name": "NORCO", "id": 12947, "firstReleaseDate": "2022-03-25T00:00:00.000Z", "url": "https://opencritic.com/game/12947/norco"}, {"images": {"banner": {"og": "game/6630/o/shlyjcXO.jpg", "sm": "game/6630/CvSBIvCt.jpg"}}, "percentRecommended": 96.42857142857143, "numReviews": 174, "topCriticScore": 89.82758620689656, "tier": "Mighty", "name": "Sekiro: Shadows Die Twice", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2019-03-22T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2019-03-22T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2019-03-22T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 6630, "firstReleaseDate": "2019-03-22T00:00:00.000Z", "url": "https://opencritic.com/game/6630/sekiro-shadows-die-twice"}, {"images": {"banner": {"og": "game/14083/o/UiTR2k7I.jpg", "sm": "game/14083/tOl1ZZmP.jpg"}}, "percentRecommended": 88.88888888888889, "numReviews": 12, "topCriticScore": 89.8, "tier": "Mighty", "Platforms": [{"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2022-12-06T00:00:00.000Z"}], "name": "Dwarf Fortress", "id": 14083, "firstReleaseDate": "2022-12-06T00:00:00.000Z", "url": "https://opencritic.com/game/14083/dwarf-fortress"}, {"images": {"banner": {"og": "game/194/o/K4XoMTxR.jpg", "sm": "game/194/xGJNUwMb.jpg"}}, "percentRecommended": 84.0909090909091, "numReviews": 44, "topCriticScore": 89.73809523809524, "tier": "Mighty", "name": "Minecraft", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2017-09-20T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2017-09-20T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2017-09-20T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2017-09-20T00:00:00.000Z"}, {"id": 32, "name": "Nintendo Switch", "shortName": "Switch", "releaseDate": "2017-09-20T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2017-09-20T00:00:00.000Z"}], "id": 194, "firstReleaseDate": "2017-09-20T00:00:00.000Z", "url": "https://opencritic.com/game/194/minecraft"}, {"images": {"banner": {"og": "game/7898/o/haTDvPmE.jpg", "sm": "game/7898/GeC3ADDQ.jpg"}}, "percentRecommended": 96.42857142857143, "numReviews": 114, "topCriticScore": 89.69072164948453, "tier": "Mighty", "name": "Monster Hunter World: Iceborne", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2019-09-06T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2019-09-06T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2020-02-28T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 7898, "firstReleaseDate": "2019-09-06T00:00:00.000Z", "url": "https://opencritic.com/game/7898/monster-hunter-world-iceborne"}, {"images": {"banner": {"og": "game/4903/o/8L69Vqvf.jpg", "sm": "game/4903/VK4BC9gB.jpg"}}, "percentRecommended": 96.7032967032967, "numReviews": 187, "topCriticScore": 89.68085106382979, "tier": "Mighty", "name": "Monster Hunter World", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2018-01-26T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2018-01-26T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2018-08-09T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 4903, "firstReleaseDate": "2018-01-26T00:00:00.000Z", "url": "https://opencritic.com/game/4903/monster-hunter-world"}, {"images": {"banner": {"og": "game/1520/o/KFnaZEmx.jpg", "sm": "game/1520/5mOPNzW1.jpg"}}, "percentRecommended": 93.67088607594937, "numReviews": 165, "topCriticScore": 89.64963503649635, "tier": "Mighty", "name": "Dark Souls III", "Platforms": [{"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2016-04-12T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2016-04-12T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2016-04-12T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 1520, "firstReleaseDate": "2016-04-12T00:00:00.000Z", "url": "https://opencritic.com/game/1520/dark-souls-iii"}, {"images": {"banner": {"og": "game/13083/o/85hi0LV1.jpg", "sm": "game/13083/TH3wDLij.jpg"}}, "percentRecommended": 100, "numReviews": 40, "topCriticScore": 89.6470588235294, "tier": "Mighty", "Platforms": [{"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2022-04-27T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2022-04-27T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2022-04-27T00:00:00.000Z"}, {"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2022-04-27T00:00:00.000Z"}, {"id": 32, "name": "Nintendo Switch", "shortName": "Switch", "releaseDate": "2022-04-27T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2022-04-27T00:00:00.000Z"}], "name": "The Stanley Parable: Ultra Deluxe", "id": 13083, "firstReleaseDate": "2022-04-27T00:00:00.000Z", "url": "https://opencritic.com/game/13083/the-stanley-parable-ultra-deluxe"}, {"images": {"banner": {"og": "game/13251/o/jHv6LzWP.jpg", "sm": "game/13251/g1JtshOG.jpg"}}, "percentRecommended": 98.55072463768117, "numReviews": 71, "topCriticScore": 89.63636363636364, "tier": "Mighty", "Platforms": [{"id": 32, "name": "Nintendo Switch", "shortName": "Switch", "releaseDate": "2022-06-15T00:00:00.000Z"}, {"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2022-06-15T00:00:00.000Z"}], "name": "Neon White", "id": 13251, "firstReleaseDate": "2022-06-15T00:00:00.000Z", "url": "https://opencritic.com/game/13251/neon-white"}, {"images": {"banner": {"og": "game/4002/o/F7I02fQd.jpg", "sm": "game/4002/Xcjz43Bf.jpg"}}, "percentRecommended": 98.46153846153847, "numReviews": 67, "topCriticScore": 89.60526315789474, "tier": "Mighty", "name": "Hollow Knight", "Platforms": [{"id": 27, "name": "PC", "shortName": "PC", "releaseDate": "2017-02-24T00:00:00.000Z"}, {"id": 32, "name": "Nintendo Switch", "shortName": "Switch", "releaseDate": "2018-06-12T00:00:00.000Z"}, {"id": 6, "name": "PlayStation 4", "shortName": "PS4", "releaseDate": "2018-09-25T00:00:00.000Z"}, {"id": 7, "name": "Xbox One", "shortName": "XB1", "releaseDate": "2018-09-25T00:00:00.000Z"}, {"id": 2, "name": "Xbox Series X/S", "shortName": "XBXS", "releaseDate": "2020-11-10T00:00:00.000Z"}, {"id": 3, "name": "PlayStation 5", "shortName": "PS5", "releaseDate": "2020-11-12T00:00:00.000Z"}], "id": 4002, "firstReleaseDate": "2017-02-24T00:00:00.000Z", "url": "https://opencritic.com/game/4002/hollow-knight"}]}, "logged_in": false, "username": "", "events": [{"name": "state.hydrate"}]})
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
sx={{"borderBottom": "0.2em solid #F0F0F0", "paddingX": "2em", "paddingY": "1em", "bg": "rgba(255,255,255, 1)"}}><NextLink passHref={true}
href="/"><Link><HStack><Image src="favicon.ico"/>
<Heading>{`GameHub`}</Heading></HStack></Link></NextLink>
<Menu><MenuButton>{state.logged_in ? <Avatar name={state.username}
size="md"/> : <Box/>}</MenuButton>
<MenuList><Center><VStack><Avatar name={state.username}
size="md"/>
<Text>{state.username}</Text></VStack></Center>
<MenuDivider/>
<NextLink passHref={true}
href="#"><Link onClick={() => Event([E("state.logout", {})])}><MenuItem>{`Sign Out`}</MenuItem></Link></NextLink></MenuList></Menu></HStack></Box>
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
<meta name="description"
content="A Pynecone app."/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Box>
)
}