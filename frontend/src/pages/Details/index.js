import React from 'react';
import { MdEdit, MdDeleteForever, MdLocationOn, MdEvent } from 'react-icons/md';
import { Container } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>React Native</h1>
        <div>
          <button className="btn btn-edit" type="button">
            <span className="icon">
              <MdEdit size={20} />
            </span>
            Editar
          </button>
          <button className="btn btn-cancel" type="button">
            <span className="icon">
              <MdDeleteForever size={20} />
            </span>
            Cancelar
          </button>
        </div>
      </header>
      <img
        className="banner"
        src=" https://api.adorable.io/avatars/285/abott@adorable"
        alt="banner"
      />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque
        habitant morbi tristique senectus et netus et malesuada. Diam maecenas
        sed enim ut.
      </p>
      <footer>
        <span>
          <MdEvent
            size={25}
            style={{ marginRight: 10, position: 'relative', top: 4 }}
          />
          24 de Junho
        </span>
        <span>
          <MdLocationOn
            size={25}
            style={{ marginRight: 10, position: 'relative', top: 4 }}
          />
          Curitiba
        </span>
      </footer>
    </Container>
  );
}
