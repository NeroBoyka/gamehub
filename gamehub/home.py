import pynecone as pc
from .base_state import *
from .helpers import navbar
import datetime


import requests
import json


url = "https://opencritic-api.p.rapidapi.com/game"

querystring = {"platforms":"pc","sort":"score","skip":"20"}

headers = {
	"X-RapidAPI-Key": "c125bd5691msh169e59f86f32db9p1cf1aejsnba25dba52c95",
	"X-RapidAPI-Host": "opencritic-api.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

data = json.loads(response.text)

print(data[0]['url'])

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


def home():
    """The home page."""
    return pc.center(
        navbar(State),
        
        pc.foreach(
            data,
            lambda game: pc.link(
                                pc.text(type(game)),
                                pc.image(
                                src="/momy.jpg",
                                width="auto",
                                height="auto",
                                ),
                                href="/",
                            ),
        ),
        
        padding_top="6em",
    )