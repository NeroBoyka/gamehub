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

# print(data[1]["images"])


# pc_release_dates = [platform['releaseDate'] for game in data for platform in game['Platforms'] if platform['name'] == 'PC']

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


{
    'images': {'banner': {'og': 'game/2848/o/AcXwIQOO.jpg', 'sm': 'game/2848/Wy3FCkZn.jpg'}},
    'percentRecommended': 94.47852760736197,
    'numReviews': 167,
    'topCriticScore': 91.01639344262296,
    'tier': 'Mighty',
    'name': 'INSIDE',
    'Platforms':
    [
        {'id': 6, 'name': 'PlayStation 4', 'shortName': 'PS4', 'releaseDate': '2016-08-23T00:00:00.000Z'},
        {'id': 7, 'name': 'Xbox One', 'shortName': 'XB1', 'releaseDate': '2016-06-29T00:00:00.000Z'},
        {'id': 27, 'name': 'PC', 'shortName': 'PC', 'releaseDate': '2016-07-07T00:00:00.000Z'},
        {'id': 2, 'name': 'Xbox Series X/S', 'shortName': 'XBXS', 'releaseDate': '2020-11-10T00:00:00.000Z'},
        {'id': 3, 'name': 'PlayStation 5', 'shortName': 'PS5', 'releaseDate': '2020-11-12T00:00:00.000Z'}
    ],
    'id': 2848,
    'firstReleaseDate': '2016-06-29T00:00:00.000Z',
    'url': 'https://opencritic.com/game/2848/inside'
}
"""