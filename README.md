# ReactFlix
Este projeto é uma réplica da interface do usuário da Netflix, criado utilizando React.js. O objetivo principal deste projeto é servir como um aprendizado prático em React, consumindo APIs externas, utilizando componentes funcionais e hooks, e estilizando com CSS.

Funcionalidades
Exibição de filmes e séries divididos por categorias.
Destaque de filmes e séries em banners.
Navegação por meio de uma barra de navegação.
Tecnologias Utilizadas
React.js
Axios para requisições HTTP
CSS para estilização
TMDB API para informações sobre filmes e séries
Pré-requisitos
Antes de iniciar, certifique-se de ter o Node.js e npm instalados em sua máquina.

Instalação
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/reactflix.git
Navegue até o diretório do projeto:
bash
Copiar código
cd reactflix
Instale as dependências:
bash
Copiar código
npm install
Crie um arquivo .env na raiz do projeto e adicione sua chave de API do TMDB:
makefile
Copiar código
REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

bash
Copiar código
npm start
Abra http://localhost:3000 para ver o projeto no navegador.

Estrutura do Projeto
java
Copiar código
reactflix/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Banner.css
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Row.js
│   │   ├── Row.css
│   ├── App.js
│   ├── index.js
│   ├── requests.js
├── .env
├── .gitignore
├── package.json
├── README.md
Descrição dos Arquivos
src/App.js: Componente principal que organiza os componentes Banner, Navbar e Row.
src/index.js: Ponto de entrada da aplicação React.
src/requests.js: Arquivo contendo as URLs das requisições para a API do TMDB.
src/components/Banner.js: Componente responsável por exibir o banner principal.
src/components/Banner.css: Estilos para o componente Banner.
src/components/Navbar.js: Componente da barra de navegação.
src/components/Navbar.css: Estilos para o componente Navbar.
src/components/Row.js: Componente responsável por exibir as filas de filmes/séries.
src/components/Row.css: Estilos para o componente Row.
Consumindo a API do TMDB
Para obter os dados de filmes e séries, estamos utilizando a API do The Movie Database (TMDB). A configuração das requisições está em src/requests.js.

Exemplo de Configuração (requests.js)
javascript
Copiar código
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto é licenciado sob a MIT License.
