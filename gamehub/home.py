import pynecone as pc
from .base_state import *
from .helpers import navbar
import datetime
import requests
import json
from dataclasses import dataclass


@dataclass
class Game:
    url: str


def get_data()-> list[Game]: 
    url = "https://opencritic-api.p.rapidapi.com/game"

    querystring = {"platforms":"pc","sort":"score","skip":"20"}

    headers = {
        "X-RapidAPI-Key": "c125bd5691msh169e59f86f32db9p1cf1aejsnba25dba52c95",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    data = json.loads(response.text)
    
    games = []
    for x in data:
        games.append(Game(url=x['url']))

    return games


# print(data[0]['url'])

class HomeState(State):
    games: list[Game] = get_data()



def linker(game: Game):
    return pc.link(
                pc.image(
                src="/momy.jpg",
                width="auto",
                height="auto",
                ),
                href=game.url,
            )


def home():
    games = get_data()
    """The home page."""
    return pc.center(
        navbar(State),

        pc.foreach(
            games,
            linker
        ),
        
        padding_top="6em",
    )

app = pc.App(state=HomeState)


"""
{
	'images': {'banner': {'og': 'game/4002/o/F7I02fQd.jpg', 'sm': 'game/4002/Xcjz43Bf.jpg'}},
    'percentRecommended': 98.46153846153847,
    'numReviews': 67,
    'topCriticScore': 89.60526315789474,
    'tier': 'Mighty',
    'name': 'Hollow Knight',
    'Platforms':
    [
    	{'id': 27, 'name': 'PC', 'shortName': 'PC', 'releaseDate': '2017-02-24T00:00:00.000Z'},
        {'id': 32, 'name': 'Nintendo Switch', 'shortName': 'Switch', 'releaseDate': '2018-06-12T00:00:00.000Z'},
        {'id': 6, 'name': 'PlayStation 4', 'shortName': 'PS4', 'releaseDate': '2018-09-25T00:00:00.000Z'},
        {'id': 7, 'name': 'Xbox One', 'shortName': 'XB1', 'releaseDate': '2018-09-25T00:00:00.000Z'},
        {'id': 2, 'name': 'Xbox Series X/S', 'shortName': 'XBXS', 'releaseDate': '2020-11-10T00:00:00.000Z'},
        {'id': 3, 'name': 'PlayStation 5', 'shortName': 'PS5', 'releaseDate': '2020-11-12T00:00:00.000Z'}
    ],
    'id': 4002,
    'firstReleaseDate': '2017-02-24T00:00:00.000Z',
    'url': 'https://opencritic.com/game/4002/hollow-knight'
}
"""