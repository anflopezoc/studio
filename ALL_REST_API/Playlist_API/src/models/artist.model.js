module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('artist', {
        name: {
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
