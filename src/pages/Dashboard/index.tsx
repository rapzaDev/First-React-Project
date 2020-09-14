import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on github</Title>

      <Form>
        <input placeholder="Put the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68792232?s=460&u=19e080c9c96db8bc5147069884bec16f258abcd4&v=4"
            alt="Rafael Pérez"
          />

          <div>
            <strong>TwitchX</strong>
            <p>
              Recreation of Twitch.tv Interface using React Native & Typescript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68792232?s=460&u=19e080c9c96db8bc5147069884bec16f258abcd4&v=4"
            alt="Rafael Pérez"
          />

          <div>
            <strong>TwitchX</strong>
            <p>
              Recreation of Twitch.tv Interface using React Native & Typescript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68792232?s=460&u=19e080c9c96db8bc5147069884bec16f258abcd4&v=4"
            alt="Rafael Pérez"
          />

          <div>
            <strong>TwitchX</strong>
            <p>
              Recreation of Twitch.tv Interface using React Native & Typescript
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
