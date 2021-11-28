const db = require('../DB/db');

const adminDefault = async () => {



 /// ------------------- Tame Impala ---------------------------------



        const TameImpala = await db.Artists.findOrCreate({
                where: 
                    {
                    name: 'Tame Impala'
                    },
                defaults: 
                    {
                    name: 'Tame Impala'
                    }
                });
            
            const CurrentsTA_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'Currents',
                    artistId: TameImpala[0]['id']
                    },
                defaults: 
                    {
                    title: 'Currents',
                    artistId: TameImpala[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'The Less I Know The Better',
                        artistId: TameImpala[0]['id']
                        },
                    defaults: 
                        {
                        title: 'The Less I Know The Better',
                        time: '00:03:36',
                        artistId: TameImpala[0]['id'],
                        albumId: CurrentsTA_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'let It Happen',
                        artistId: TameImpala[0]['id']
                        },
                    defaults: 
                        {
                        title: 'let It Happen',
                        time: '00:07:47',
                        artistId: TameImpala[0]['id'],
                        albumId: CurrentsTA_Album[0]['id']
                        }
                    });
            const TheSlowRushTA_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'The Slow Rush',
                    artistId: TameImpala[0]['id']
                    },
                defaults: 
                    {
                    title: 'The Slow Rush',
                    artistId: TameImpala[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Lost In Yesterday',
                        artistId: TameImpala[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Lost In Yesterday',
                        time: '00:04:09',
                        artistId: TameImpala[0]['id'],
                        albumId: TheSlowRushTA_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Borderline',
                        artistId: TameImpala[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Borderline',
                        time: '00:03:57',
                        artistId: TameImpala[0]['id'],
                        albumId: TheSlowRushTA_Album[0]['id']
                        }
                    });



     
 /// ------------------- The Weeknd ---------------------------------
 
 
 
        const TheWeeknd = await db.Artists.findOrCreate({
                where: 
                    {
                    name: 'The Weeknd'
                    },
                defaults: 
                    {
                    name: 'The Weeknd'
                    }
                });

            const AferHouse_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'After House',
                    artistId: TheWeeknd[0]['id']
                    },
                defaults: 
                    {
                    title: 'After House',
                    artistId: TheWeeknd[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Blinding Lights',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Blinding Lights',
                        time: '00:03:20',
                        artistId: TheWeeknd[0]['id'],
                        albumId: AferHouse_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'In Youre Eyes',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'In Youre Eyes',
                        time: '00:03:20',
                        artistId: TheWeeknd[0]['id'],
                        albumId: AferHouse_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Save Your Tears',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Save Your Tears',
                        time: '00:03:57',
                        artistId: TheWeeknd[0]['id'],
                        albumId: AferHouse_Album[0]['id']
                        }
                    });
            const StarboyTW_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'Starboy',
                    artistId: TheWeeknd[0]['id']
                    },
                defaults: 
                    {
                    title: 'Starboy',
                    artistId: TheWeeknd[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Starboy',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Starboy',
                        time: '00:03:50',
                        artistId: TheWeeknd[0]['id'],
                        albumId: StarboyTW_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Secrets',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Secrets',
                        time: '00:04:25',
                        artistId: TheWeeknd[0]['id'],
                        albumId: StarboyTW_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'I Feel it Coming',
                        artistId: TheWeeknd[0]['id']
                        },
                    defaults: 
                        {
                        title: 'I Feel it Coming',
                        time: '00:04:29',
                        artistId: TheWeeknd[0]['id'],
                        albumId: StarboyTW_Album[0]['id']
                        }
                    });

     
 /// ------------------- The Strokes ---------------------------------
 

 
        const TheStrokes = await db.Artists.findOrCreate({
                where: 
                    {
                    name: 'The Strokes'
                    },
                defaults: 
                    {
                    name: 'The Strokes'
                    }
                });
            const ROF_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'Room On Fire',
                    artistId: TheStrokes[0]['id']
                    },
                defaults: 
                    {
                    title: 'Room On Fire',
                    artistId: TheStrokes[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Reptilia',
                        artistId: TheStrokes[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Reptilia',
                        time: '00:03:39',
                        artistId: TheStrokes[0]['id'],
                        albumId: ROF_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'What Ever Happened',
                        artistId: TheStrokes[0]['id']
                        },
                    defaults: 
                        {
                        title: 'What Ever Happened',
                        time: '00:02:49',
                        artistId: TheStrokes[0]['id'],
                        albumId: ROF_Album[0]['id']
                        }
                    });
            const FIOE_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'First impressions Of Earth',
                    artistId: TheStrokes[0]['id']
                    },
                defaults: 
                    {
                    title: 'First impressions Of Earth',
                    artistId: TheStrokes[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'You only Live Once',
                        artistId: TheStrokes[0]['id']
                        },
                    defaults: 
                        {
                        title: 'You only Live Once',
                        time: '00:03:09',
                        artistId: TheStrokes[0]['id'],
                        albumId: FIOE_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Heart in a Cage',
                        artistId: TheStrokes[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Heart in a Cage',
                        time: '00:03:26',
                        artistId: TheStrokes[0]['id'],
                        albumId: FIOE_Album[0]['id']
                        }
                    });



 /// ------------------- Daft Punk ---------------------------------
                     


        const DaftPunk = await db.Artists.findOrCreate({
                where: 
                    {
                    name: 'Daft Punk'
                    },
                defaults: 
                    {
                    name: 'Daft Punk'
                    }
                });
            const RAM_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'Random Access Memories',
                    artistId: DaftPunk[0]['id']
                    },
                defaults: 
                    {
                    title: 'Random Access Memories',
                    artistId: DaftPunk[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Giorgo by Moroder',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Giorgo by Moroder',
                        time: '00:09:04',
                        artistId: DaftPunk[0]['id'],
                        albumId: RAM_Album[0]['id']
                        }
                    });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Touch',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Touch',
                        time: '00:08:18',
                        artistId: DaftPunk[0]['id'],
                        albumId: RAM_Album[0]['id']
                        }
                        });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Fragments of time',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Fragments of time',
                        time: '00:04:39',
                        artistId: DaftPunk[0]['id'],
                        albumId: RAM_Album[0]['id']
                        }
                        });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Get Lucky',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Get Lucky',
                        time: '00:06:09',
                        artistId: DaftPunk[0]['id'],
                        albumId: RAM_Album[0]['id']
                        }
                        });

            const DiscoveryDP_Album = await db.Albums.findOrCreate({
                where: 
                    {
                    title: 'Discovery',
                    artistId: DaftPunk[0]['id']
                    },
                defaults: 
                    {
                    title: 'Discovery',
                    artistId: DaftPunk[0]['id']
                    }
                });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'One More Time',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'One More Time',
                        time: '00:05:20',
                        artistId: DaftPunk[0]['id'],
                        albumId: DiscoveryDP_Album[0]['id']
                        }
                        });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Something About Us',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Something About Us',
                        time: '00:03:52',
                        artistId: DaftPunk[0]['id'],
                        albumId: DiscoveryDP_Album[0]['id']
                        }
                        });
                await db.Songs.findOrCreate({
                    where: 
                        {
                        title: 'Face to face',
                        artistId: DaftPunk[0]['id']
                        },
                    defaults: 
                        {
                        title: 'Face to face',
                        time: '00:04:00',
                        artistId: DaftPunk[0]['id'],
                        albumId: DiscoveryDP_Album[0]['id']
                        }
                        });


  }

module.exports = adminDefault;



         