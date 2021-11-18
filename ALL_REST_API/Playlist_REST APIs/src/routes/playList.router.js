const express = require('express');
const router = express.Router();
const {showSongs, 
    createPlayList,
    showPlayLists, 
    addSongtoPlaylist,
    removeSongtoPlaylist, 
    showPlaylistOne, 
    changeTitlePlayList,
    musicapi} = require('../controllers/playList_controller/playList.controllers')


//Paths


/**
* @swagger
* /myplaylists/showallplaylists:
*       get:
*          summary: Show all playlists of the user registered.
*          description: Endpoint to show all playlists of the user registered.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []         
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  404:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.get('/showallplaylists', showPlayLists);

/**
* @swagger
* /myplaylists/createplaylist:
*        post:
*          summary: Create Playlist.
*          description: Endpoint to create playlist from the user registered.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                     schema:
*                          $ref: '#/components/schemas/createPlaylist'
*                     type: 
*                          object         
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.post('/createplaylist', createPlayList);

/**
* @swagger
* /myplaylists/showsongs:
*        get:
*          summary: Show all songs in data base.
*          description: Endpoint to show songs before adding them to the playlist.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: typeFilter
*                     description: Enter the filter based on user preference, the user can use 'album', 'artist' or 'nothing' if the user chooses to use pagination.
*                   - in: query
*                     name: pageNumber
*                     description: Number of the page to show(Only nothing filter).
*                   - in: query
*                     name: pageSize
*                     description: Number of songs to show the page(Only nothing filter). 
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  404:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.get('/showsongs', showSongs);

/**
* @swagger
* /myplaylists/showplaylist:
*        get:
*          summary: Show one playlist of the user registred.
*          description: Endpoint to show only a playlist that the user wants to select.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: idPlaylist
*                     description: Playlist Id of the user registred.
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.get('/showplaylist', showPlaylistOne);

/**
* @swagger
* /myplaylists/titleplaylistupdate:
*        put:
*          summary: Update the title from playlist.
*          description: Endpoint from title update that the playlist with id selected in query.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: idPlaylist
*                     description: Playlist Id of the user registred.
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                     schema:
*                          $ref: '#/components/schemas/updateTitlePlaylist'
*                     type: 
*                          object   
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.put('/titleplaylistupdate', changeTitlePlayList);

/**
* @swagger
* /myplaylists/addsongplaylist:
*        post:
*          summary: Add song to the playlist selected by id.
*          description: Endpoint to add song to the playlist selected by id through Playlist id and song id.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: idPlaylist
*                     description: Playlist ID of the user registred.
*                   - in: query
*                     name: idSong
*                     description: Song ID that the user wants to add to the playlist. 
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.post('/addsongplaylist', addSongtoPlaylist);

/**
* @swagger
* /myplaylists/removesongplaylist:
*        delete:
*          summary: Remove song to the playlist selected by id.
*          description: Endpoint to remove song to the playlist selected by id through Playlist id and song id.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: idPlaylist
*                     description: Playlist ID of the user registred.
*                   - in: query
*                     name: idSongInList
*                     description: Song ID in playlist that the user wants to remove to the playlist (It is not the song id from Songs Table in the database).
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.delete('/removesongplaylist', removeSongtoPlaylist);

/**
* @swagger
* /myplaylists/requestapi:
*        get:
*          summary: Add artist songs through to Deezer API to general library.
*          description: Endpoint to add artist songs through Deezer API to the general library. You must request in Query the name of the artist or group to add in the general library. Returns the songs added to the general library.
*          tags: [myPlaylists]
*          security: 
*                   - bearerAuth: []
*          parameters:
*                   - in: query
*                     name: artistName
*                     description: The artist name that the user want to show information.
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  400:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.get('/requestapi', musicapi)

// -----Schemas Swagger-----

/**
 * @swagger
 * name: Create playlist schema
 * description: Model to create playlist with the title. 
 * components:
 *  schemas:
 *      createPlaylist:
 *          type: object
 *          required:
 *              -title
 *          properties:
 *              title:
 *                  type: string
 *                  example: myFirstPlaylist
 *                  description: Title from playlist 
 *          
 *                  
 */

/**
 * @swagger
 * name: Update title playlist schema
 * description: Model update title playlist. 
 * components:
 *  schemas:
 *      updateTitlePlaylist:
 *          type: object
 *          required:
 *              -newTitle
 *          properties:
 *              newTitle:
 *                  type: string
 *                  example: Rock and Synth
 *                  description: Title from playlist 
 *          
 *                  
 */
module.exports = router 