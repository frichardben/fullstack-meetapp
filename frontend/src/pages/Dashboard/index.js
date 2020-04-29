import React from 'react';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline
              color="#fff"
              style={{ marginRight: 10 }}
              size={20}
            />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        <Meetup>
          <strong>Reactjs</strong>
          <span>
            10 de Agosto
            <MdChevronRight size={36} color="#fff" style={{ marginLeft: 30 }} />
          </span>
        </Meetup>
        <Meetup>
          <strong>Reactjs</strong>
          <span>
            10 de Agosto
            <MdChevronRight size={36} color="#fff" style={{ marginLeft: 30 }} />
          </span>
        </Meetup>
        <Meetup>
          <strong>Reactjs</strong>
          <span>
            10 de Agosto
            <MdChevronRight size={36} color="#fff" style={{ marginLeft: 30 }} />
          </span>
        </Meetup>
      </ul>
    </Container>
  );
}
