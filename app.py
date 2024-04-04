from flask import Flask, render_template

app = Flask(__name__)

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

# Rota para a página de login
@app.route('/login')
def login():
    return render_template('login.html')

# Rota para a página de registro
@app.route('/registro')
def registro():
    return render_template('registro.html')

'''
IMPLEMENTAR BD?:
from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configurações do MySQL
app.config['MYSQL_HOST'] = 'localhost'  # Host do MySQL
app.config['MYSQL_USER'] = 'usuario'  # Nome de usuário do MySQL
app.config['MYSQL_PASSWORD'] = 'senha'  # Senha do MySQL
app.config['MYSQL_DB'] = 'nomedobanco'  # Nome do banco de dados MySQL

# Inicialize o MySQL
mysql = MySQL(app)

@app.route('/')
def index():
    # Execute uma consulta SQL
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM tabela")
    data = cur.fetchall()
    cur.close()
    return str(data)  # Retorna os dados obtidos da consulta SQL

if __name__ == '__main__':
app.run(debug=True)
'''

if __name__ == '__main__':
    app.run(debug=True)