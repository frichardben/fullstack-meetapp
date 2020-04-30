import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizers');

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

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
        {meetups.map((meetup) => (
          <Link key={meetup.id} to={`/details/${meetup.id}`}>
            <Meetup>
              <strong>{meetup.title}</strong>

              <span>
                {format(parseISO(meetup.date), "d 'de' MMMM 'às' HH'h' ", {
                  locale: pt,
                })}
                <MdChevronRight
                  size={36}
                  color="#fff"
                  style={{ marginLeft: 30 }}
                />
              </span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
