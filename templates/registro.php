<?php
// Verifica se o formulário de registro foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos foram preenchidos
    if (isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["confirm_password"])) {
        // Verifica se as senhas coincidem
        if ($_POST["password"] === $_POST["confirm_password"]) {
            // Processo de registro bem-sucedido (aqui você pode adicionar a lógica para inserir os dados no banco de dados)
            $success_message = "Registro concluído com sucesso!";
        } else {
            // Exibe uma mensagem de erro se as senhas não coincidirem
            $error_message = "As senhas não coincidem";
        }
    } else {
        // Exibe uma mensagem de erro se algum campo estiver faltando
        $error_message = "Por favor, preencha todos os campos";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <h2>Registro</h2>
    <?php if (isset($error_message)) { ?>
        <p><?php echo $error_message; ?></p>
    <?php } ?>
    <?php if (isset($success_message)) { ?>
        <p><?php echo $success_message; ?></p>
    <?php } ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required>

        <label for="confirm_password">Confirmar Senha:</label>
        <input type="password" id="confirm_password" name="confirm_password" required>

        <input type="submit" value="Registrar">
    </form>
</body>
</html>