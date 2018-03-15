module Main exposing
  (main)

{-| This is the main module of the Publeaks mobile web-app. This module exports the web app as `app : Program Flags Model Msg`. Mount this app in your HTML source with javascript using:

    flags = { "server" : "//example.com", .. };
    mount = document.getElementById('my-app');
    app = Elm.App.embed(mount, flags);

  ## Flags

  `App` requires the following flags as `{ "key" : "value description" }`:

    { "server" : "API server address"
    }

  **server**

  Network-path reference or absolute URI of the API server. Note that any scheme in an absolute URI other than `https` will be ignored in favour of `https`.

  # `main` entry point

@docs app
-}


import Html
import Html.Attributes as Attrs


type alias Flags =
  {
  }


type alias Model =
  {
  }


type Msg
  = NoOp


{-| Entry point for the Publeaks mobile app. See the [`App`](#) module documentation for detailed documentation on the flags that `main` requires.
-}
main : Program Flags Model Msg
main =
  Html.programWithFlags
    { init = init
    , update = update
    , subscriptions = subscriptions
    , view = view
    }


init : Flags -> ( Model, Cmd Msg )
init flags =
  { } ! [Cmd.none]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    NoOp ->
      model ! [Cmd.none]


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none


view : Model -> Html.Html Msg
view model =
  Html.text "Hello, World!"
