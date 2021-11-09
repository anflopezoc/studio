const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken')
const db = require('../../DB/db');
const config = require('../../config/config');
const {emailValidator, passwordValidator} = require('./account.validator')

exports.signin = async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const emailValidated = emailValidator(email);
    const passwordValidated = passwordValidator(password);

    const emailFound = await db.Users.findOne({
        where: {
            email:email
        }
    });

    if (!emailFound){
        if(emailValidated) {
            if (passwordValidated) {
                const newUser = await db.Users.create({
                    email:emailValidated,
                    password: bcrypt.hashSync(passwordValidated, 10),
                });
                res.status(200).json(newUser)
            } else res.status(404).send("Password is wrong, it should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters")
        } else res.status(404).send(`Email is wrong, it should have '@' and '.com' or '.co' `)
    }  else res.status(404).send(`Email already exists`)
};


exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const emailFound = await db.Users.findOne({
        where: {
            email:email
        }
    });

     
    if (emailFound){
        const result = await bcrypt.compareSync(password, emailFound.password);
        if(result){
            const token = jsonwebtoken.sign(
                {
                email: email
                },
                config.module.SIGNJWT,
                {expiresIn:'20m'}
                );
            res.status(200).json({token})
        } else res.status(401).send('Unauthorized');
    } else res.status(404).send('User does not exist');
}
  

    

    