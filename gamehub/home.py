import pynecone as pc
from .base_state import *
from .helpers import navbar
import datetime
import requests
import json

# -----------------------------------------------------------------------------------

style_image={
    "width": "100%",
    "maxWidth": "365px",
    "height": "auto",
    "border": "2px solid #ccc",
    "boxShadow": "0 0 5px rgba(0,0,0,0.3)",
    "borderRadius": "5px",
}

style_link={
    "width": "150px",
    "height": "230px",
    "border": "px solid #ccc",
    "transition": "transform .2s",
    "boxShadow": "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",

}

style_list_game={
    # "maxWidth": "1000px",
    # "width": "100%",
    # "overflow": "auto",
}

# -----------------------------------------------------------------------------------

class Game(pc.Base):
    id: str
    title: str
    thumbnail: str
    short_description: str
    game_url: str
    genre: str
    platform: str
    publisher: str
    developer: str
    release_date: str
    freetogame_profile_url: str

# -----------------------------------------------------------------------------------

def get_data()-> list[Game]: 
    url = "https://free-to-play-games-database.p.rapidapi.com/api/games"

    headers = {
        "X-RapidAPI-Key": "c125bd5691msh169e59f86f32db9p1cf1aejsnba25dba52c95",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)

    data = json.loads(response.text)    
    
    games = []
    
    for x in data:
        game = Game(
            id=x['id'],
            title=x['title'],
            thumbnail=x['thumbnail'],
            short_description=x['short_description'],
            game_url=x['game_url'],
            genre=x['genre'],
            platform=x['platform'],
            publisher=x['publisher'],
            developer=x['developer'],
            release_date=x['release_date'],
            freetogame_profile_url=x['freetogame_profile_url'],
        )
        games.append(game)

    return games

# -----------------------------------------------------------------------------------

def linker(game: Game):
    return pc.link(
                pc.vstack(
                    pc.image(
                    # src=game.thumbnail,
                    src="/momy.jpg",
                    style=style_image,
                    ),

                    pc.text(game.genre),

                    pc.hstack(
                        pc.icon(tag="star"),
                        pc.text(game.title),
                    ),
                    
                    padding = "5px",
                ),
                href=game.game_url,
                _hover={
                        "transform": "scale(1.25)",
                },
                style=style_link,
            )


# -----------------------------------------------------------------------------------

class HomeState(State):
    @pc.var
    def games(self) ->list[Game]:
        return  get_data()

# -----------------------------------------------------------------------------------

def home():

    """The home page."""
    return pc.box(
        pc.vstack(
            navbar(State),

            pc.heading("Popular Games"),
            pc.text("Don't miss the most popular games on GameHub today"),

            pc.hstack(
                pc.foreach(
                    HomeState.games,
                    linker,
                ),
                style=style_list_game,
            ),
            
            padding_top="6em",
        )
    )
    

app = pc.App(state=HomeState)
