module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('playlist', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        listDuration: {
            type: DataTypes.TIME,
            defaultValue: '00:00:00'
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Product
}
