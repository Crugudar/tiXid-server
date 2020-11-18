# tiXid-server
## Multiplayer Game Online!

## MVP
The MVP will cover the following:

-   Home
-   Working Multiplayer Online Game
-   Profile
-   Signup
-   Login


## Backlog


- Custom game mode

## Models

**User**

- Username: String
- Password: String
- e-mail: String
- Image: String
- CustomCards:[ObjectsID]



**Cards**

- image: String
- title: String
- author:ObjectID

## Routes

**Auth**

-get/home: 

-post.signup

-post/login

-get/logout

-get/me

**User Profile**

-get/profile

-get/profilephoto

-post/profilephoto

-get/addcard

-post/addcard

-get/editcard/:id

-post/editcard/:id

-post/deletecard/:id

**Game**

-get/game


## Wireframes
- ![Wireframe 1](https://gyazo.com/702bdfe678824644b7b5b71fd21e4992)
- ![Wireframe 2](https://gyazo.com/1fe873d08f949090f223a0209d59df62)
- ![Wireframe 3](https://gyazo.com/41b563c62fb5277b7b3dc44cf1877181)

- https://wireframepro.mockflow.com/view/M426f4345b4d31f9335d36b57e29111dd1603800913825


## Links


- Trello: https://trello.com/b/dad5JU41/tixid

- Server: https://github.com/Crugudar/tiXid-server

- Client: https://github.com/Crugudar/tiXid-client
