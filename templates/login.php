<?php
session_start();

// Verifica se o formulário de login foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o usuário e senha foram enviados
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Verifica se as credenciais estão corretas (isso pode ser substituído por uma consulta ao banco de dados)
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Verifica se as credenciais correspondem a um usuário válido
        if ($username === "usuario" && $password === "senha") {
            // Autenticação bem-sucedida, redireciona para a página principal
            $_SESSION["username"] = $username;
            header("Location: index.php");
            exit();
        } else {
            // Credenciais inválidas, exibe uma mensagem de erro
            $error_message = "Usuário ou senha incorretos";
        }
    } else {
        // Exibe uma mensagem de erro se o usuário ou senha estiverem faltando
        $error_message = "Por favor, insira usuário e senha";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($error_message)) { ?>
        <p><?php echo $error_message; ?></p>
    <?php } ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required>

        <input type="submit" value="Login">
    </form>
</body>
</html>