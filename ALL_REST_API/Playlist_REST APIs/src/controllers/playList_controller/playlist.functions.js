const db = require('../../DB/db');

exports.songFind = async(id) => {
    const songRaw = await db.Songs.findOne({
        attributes: [
                    'id',
                    'title',
                    'time'
                ],
        include: [
            {
                model:db.Artists,
                attributes: ['name'],
            },
            {
                model:db.Albums,
                attributes: ['title']   
            }
                ],
        where:{
            id:id
        }
        });

    return songRaw
};



exports.userFind = async(userEmail)=> {
   return  await db.Users.findOne({
    where:{
        email:userEmail
        }    
    })
};

exports.playListFind = async(idPlaylist,idUser) => {
    return await db.Playlists.findOne({
        where:{
            id:idPlaylist,
            userId:idUser
            }
        }) 
};

exports.allSongs = async () => {
    const response = await db.Songs.findAll({
        attributes: [
                    'id',
                    'title',
                    'time'
                ],
        include: [
            {
                model:db.Artists,
                attributes: ['name'],
            },
            {
                model:db.Albums,
                attributes: ['title']   
            }
            ]
        });
    return response.reduce((a,b)=>{
                                    a.push({
                                        id:b.id,
                                        title:b.title,
                                        time:b.time,
                                        artist:b.artist.name,
                                        album: b.album.title,
                                    }) 
                                    return a},[]);
}

exports.playlistUpdateFind = async (idPlaylist) => {

    const allSong = await db.Playlist_songs.findAll({
                                attributes:[
                                        "time",
                                    ],
                                where:{
                                    playlistId:idPlaylist
                                }
                                })
    const  timeSumNumber = allSong.reduce((a,b) =>{
                                const min = parseInt(b.time.substr(3,2));
                                const sec = parseInt(b.time.substr(6,2));
                                const number = (min*60) + sec;
                                a = a + number;
                                return a
                            }, 0)

    const minuts = parseInt(timeSumNumber/60)
    const seconds = timeSumNumber-(minuts*60)
    const hours = minuts>59? parseInt(minuts/60): 0;
    const hourMin = hours > 0 ? minuts-(hours*60) : minuts;
    const mminTen = hourMin < 10 ? `0${hourMin}`: hourMin;
    const secTen = seconds < 10 ? `0${seconds}`: seconds;
    const hourTen =hours < 10 ? `0${hours}`: hours;

    const timeList = `${hourTen}:${mminTen}:${secTen}`

        await db.Playlists.update({
                                    listDuration:timeList
                                    },{
                                    where:{
                                        id:idPlaylist 
                                        }
                                    });
    
    
    return await db.Playlists.findOne({
                                    where:{
                                        id:idPlaylist 
                                        },
                                    attributes:[
                                            'id',
                                            'title',
                                            'listDuration'
                                            ],
                                    include: [
                                        {
                                            model:db.Users,
                                            attributes: ['email']
                                        },
                                        {
                                            model: db.Playlist_songs,
                                            attributes:[
                                                        'id',
                                                        'title',
                                                        'artist',
                                                        'time',
                                                        'album',
                                                        'songId'
                                                        ]
                                        }

                                    ]                                        
                                })
};

exports.songInListFind = async(idSong,idPlaylist) => {
    const songRaw = await db.Playlist_songs.findOne({
        attributes: [
                    'id',
                    'title',
                    'time'
                ],
        where:{
            id:idSong,
            playlistId:idPlaylist
        }
        });

    return songRaw
};

exports.completePlaylistFind = async(idPlaylist,idUser) => {
    return await db.Playlists.findOne({
        where:{
            id:idPlaylist,
            userId: idUser
            },
        attributes:[
                'id',
                'title',
                'listDuration'
                ],
        include: [
            {
                model:db.Users,
                attributes: ['email']
            },
            {
                model: db.Playlist_songs,
                attributes:[
                            'id',
                            'title',
                            'artist',
                            'time',
                            'album',
                            'songId'
                            ]
            }

        ]                                        
    });
}