exports.emailValidator = (email) => {
    if (email.includes('@') && email.includes('.co')){
        return email
    } else return false
};

exports.passwordValidator = (password) => {
    const PAZ = password.match(/[A-Z]/g) != null? true : false;
    const Paz = password.match(/[a-z]/g) != null? true : false;
    const Plength = password.length > 9? true: false;
    const specChar =  password.match(/[!@#$%^&*]/g) != null? true : false;

    if (Paz && PAZ && Plength && specChar) return password
    else return false
}
