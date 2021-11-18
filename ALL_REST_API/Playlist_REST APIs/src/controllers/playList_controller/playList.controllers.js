const db = require('../../DB/db');
const axios = require("axios").default;


const { userFind,
        playListFind,
        songFind,
        playlistUpdateFind,
        songInListFind,
        completePlaylistFind,
        allSongs,
        queryDeezerAPI,
        addSongstoLibrary} = require('./playlist.functions');

    
exports.showPlayLists = async(req,res)=> {
    try {
        const user = await db.Users.findOne({
                                            where:{
                                                email:req.user.email
                                                }    
                                            })
        
        const showPlayLists = await db.Playlists.findAll({
                                                where:{
                                                    userId: user.id
                                                 }
                                            });
                                    
        if (showPlayLists.length > 0){
            res.status(200).json(showPlayLists)
        }else res.status(400).send(`No playlists were found related to the email ${req.user.email}`)
        
    } catch (error) {
        console.log(error);
    }
};

exports.createPlayList = async(req,res)=> {
    try {
        const user = await db.Users.findOne({
                                            where:{
                                                email:req.user.email
                                                }    
                                            })
        
        const newPlayList = await db.Playlists.create({
                                                    title: req.body.title || 'Playlist Default',
                                                    userId: user.id
                                                });
        res.status(200).json(newPlayList)
    } catch (error) {
        console.log(error);
    }
};

exports.showSongs = async (req, res) => {
    try {
        const typeFilter = req.query.typeFilter || false;
        const pNumber = parseInt(req.query.pageNumber) || 1;
        const pSize = parseInt(req.query.pageSize) || 10;


        const songs = await allSongs();

        const filter = (arr,key) => {
            const filter = arr.reduce((a,b) =>{
                            (a[b[key]] = a[b[key]] || []).push(b)
                            return a
            },{})
            return filter
        };

            if(typeFilter == 'album'){
            const RES = filter(songs,'album');
            res.status(200).json(RES);           
            }else if(typeFilter == 'artist'){
                const RES =filter(songs,'artist');
                res.status(200).json(RES);
            }else {
                if (songs.length > pNumber * pSize ){
                    const RES = songs.slice((pNumber -1)*pSize,pNumber*pSize)
                    res.status(200).json(RES);
                }else res.status(400).send('The number of pages exceeds the number of songs to watch.');
            }                              
    } catch (error) {
        console.log(error);
    }
};

exports.addSongtoPlaylist = async (req, res) => {
    try {
        const idPlaylist = parseInt(req.query.idPlaylist);
        const idSong = parseInt(req.query.idSong)
    
        const user = await userFind(req.user.email)
        const playList = await playListFind(idPlaylist,user.id)
        const song = await songFind(idSong)

        if (playList) {
            if(song){
                const ads = {
                    title:song.title,
                    time: song.time,
                    artist:song.artist.name,
                    album:song.album.title,
                    playlistId:idPlaylist,
                    songId:idSong
                        };
                    await db.Playlist_songs.create(ads);
                
                const findPlaylist = await playlistUpdateFind(playList.id);

                res.status(200).json(findPlaylist);
            }else res.status(400).json('Id Song List not found')          
        } else res.status(400).json('Id Play List not found')
        
    } catch (error) {
        console.log(error);
    }
};

exports.removeSongtoPlaylist = async (req, res) => {
    try {
        const idPlaylist = parseInt(req.query.idPlaylist);
        const idSong = parseInt(req.query.idSongInList)
    
        const user = await userFind(req.user.email)
        const playList = await playListFind(idPlaylist,user.id)
        const song = await songInListFind(idSong,playList.id);
        
        if (playList) {
            if(song){

                await db.Playlist_songs.destroy({
                                            where:{
                                                id:idSong,
                                                playlistId:playList.id 
                                                }
                                            });
                const findPlaylist = await playlistUpdateFind(playList.id);

                res.status(200).json(findPlaylist);
            }else res.status(400).json('Id Song in Play List not found')          
        } else res.status(400).json('Id Play List not found')
        
    } catch (error) {
        console.log(error);
    }
};

exports.showPlaylistOne = async (req,res) => {
    try {
        const idPlaylist = parseInt(req.query.idPlaylist);

        const user = await userFind(req.user.email)
        const playList = await completePlaylistFind(idPlaylist,user.id)

        if (playList) {
            res.status(200).json(playList)
        } else res.status(400).json('Id Play List not found')
        
    } catch (error) {
        console.log(error);
    }
};

exports.changeTitlePlayList = async (req, res) => {
    try {
        const idPlaylist = parseInt(req.query.idPlaylist);
        const newTitle = req.body.newTitle;
        const user = await userFind(req.user.email)
        const playList = await playListFind(idPlaylist,user.id)
        if(playList){
            if(newTitle){
                await db.Playlists.update({
                                            title:newTitle
                                            },{
                                            where:{
                                                id:idPlaylist 
                                                }
                                            });
                const updatePlaylist = await playListFind(idPlaylist,user.id)
                res.status(200).json(updatePlaylist)
            }else res.status(400).json('New Title not found')
        }else res.status(400).json('Id Play List not found')
    } catch (error) {
        console.log(error);
    }
};

exports.musicapi = async (req,res) => {
    try {
        const Data = await queryDeezerAPI(req.query.artistName);

        const songsInDB = await addSongstoLibrary(Data)

        res.status(200).json(songsInDB)
        
    } catch (error) {
        throw error;
    }
}



