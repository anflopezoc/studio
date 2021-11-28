module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('playlist_song', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            defaultValue: false
        },
        artist:{
            type: DataTypes.STRING,
            allowNull: false
        },
        album:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Product
}
