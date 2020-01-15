import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_name, setGithubname] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_name">Usuário do Github</label>
            <input
              name="github_name"
              id="username_github"
              required
              value={github_name}
              onChange={e => setGithubname(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">
            Salvar
          </button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15802727?s=460&v=4" alt="Habal" />
              <div className="user-info">
                <strong>
                  <span>
                    ReactJS, React-Native, NodeJS
                  </span>
                </strong>
              </div>
            </header>
            <p>
              Build world, in code. Mostly @rust-lang
            </p>
            <a href="https://github.com/DCjanus">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15802727?s=460&v=4" alt="Habal" />
              <div className="user-info">
                <strong>
                  <span>
                    ReactJS, React-Native, NodeJS
                  </span>
                </strong>
              </div>
            </header>
            <p>
              Build world, in code. Mostly @rust-lang
            </p>
            <a href="https://github.com/DCjanus">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15802727?s=460&v=4" alt="Habal" />
              <div className="user-info">
                <strong>
                  <span>
                    ReactJS, React-Native, NodeJS
                  </span>
                </strong>
              </div>
            </header>
            <p>
              Build world, in code. Mostly @rust-lang
            </p>
            <a href="https://github.com/DCjanus">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15802727?s=460&v=4" alt="Habal" />
              <div className="user-info">
                <strong>
                  <span>
                    ReactJS, React-Native, NodeJS
                  </span>
                </strong>
              </div>
            </header>
            <p>
              Build world, in code. Mostly @rust-lang
            </p>
            <a href="https://github.com/DCjanus">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
