class Usuario {
    constructor(nome, nickName, email, adm) {
        this.nome = nome;
        this.nickname = nickName;
        this.email = email;
        this.adm = adm;
    };
    
}

let usuario = new Usuario(
    "tiago", 
    "DevMaster", 
    "tiago.soft.dev@gmail.com", 
    true,
)
console.log(usuario);