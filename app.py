from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

filmes = [
    {"id": 1, "titulo": "Filme 1", "ano": 2020, "diretor": "Diretor 1"},
    {"id": 2, "titulo": "Filme 2", "ano": 2019, "diretor": "Diretor 2"},
    {"id": 3, "titulo": "Filme 3", "ano": 2018, "diretor": "Diretor 3"},
]

@app.route('/')
def index():
    return render_template('index.html', filmes=filmes)

@app.route('/filme/<int:filme_id>')
def filme(filme_id):
    filme = next((f for f in filmes if f['id'] == filme_id), None)
    if filme:
        return render_template('filme.html', filme=filme)
    return 'Filme não encontrado', 404

@app.route('/pesquisar', methods=['GET', 'POST'])
def pesquisar():
    if request.method == 'POST':
        termo = request.form['termo']
        resultados = [filme for filme in filmes if termo.lower() in filme['titulo'].lower()]
        return render_template('pesquisa.html', termo=termo, resultados=resultados)
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
    