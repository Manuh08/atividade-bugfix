// app.js
// BUG 1: função soma está errada
function soma(a, b) {
    return a - b; // ❌ deveria ser a + b
}

// BUG 2: função login está sempre retornando false
function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return false; // ❌ deveria ser true
    }
    return false;
}

// BUG 3: função que retorna mensagem não funciona
function mensagem(nome) {
    return "Olá " + nome; // ✅ corrigido, adiciona espaço
}

// Testando
console.log(soma(2,3));       // espera 5
console.log(login("admin","1234")); // espera true
console.log(mensagem("Ana")); // espera "Olá Ana"
