let escolha = "email"

const user = {
    name: 'Lucas',
    email: 'lucasalves@gmail.com',
    age: 16
}

console.log(user.name) // Lucas

console.log(user[escolha])

const props = {
    avatar: "https://github.com/ktzxs.png",
    name: 'Lucas Alves',
    age: 16
}

// const avatar = props.avatar;
// const name = props.name;

const {avatar, name, email} = props;

console.log(avatar);