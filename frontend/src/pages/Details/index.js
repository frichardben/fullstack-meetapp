import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { MdEdit, MdDeleteForever, MdLocationOn, MdEvent } from 'react-icons/md';
import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);
  const { id } = match.params;
  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`organizers/${id}`);
      const data = {
        ...response.data,
        imageUrl: response.data.banner.url,
        formattedDate: format(
          parseISO(response.data.date),
          "d 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        ),
      };

      setMeetup(data);
    }
    loadMeetup();
  }, [id]);

  async function handleCancel() {
    try {
      await api.delete(`/meetups/${id}`);
      toast.info('Meetup cancelado');
      history.push('/dashboard');

    } catch (error) {
      const pastDate = error.response.data;
      toast.error(
        pastDate && pastDate.error
          ? `Error cancel: ${pastDate.error}`
          : 'Error cancel meetup, try again'
      );

    }

  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <Link to={`/details/${id}/edit`}>
            <button
              className="btn btn-edit"
              type="button"
              disabled={meetup.past}
            >
              <span className="icon">
                <MdEdit size={20} />
              </span>
              Editar
            </button>
          </Link>
          <button
            className="btn btn-cancel"
            onClick={handleCancel}
            type="button"
          >
            <span className="icon">
              <MdDeleteForever size={20} />
            </span>
            Cancelar
          </button>
        </div>
      </header>
      <img className="banner" src={meetup.imageUrl} alt={meetup.title} />
      <p className="description">{meetup.description}</p>
      <footer>
        <span>
          <MdEvent
            size={25}
            style={{ marginRight: 10, position: 'relative', top: 4 }}
          />
          {meetup.formattedDate}
        </span>
        <span>
          <MdLocationOn
            size={25}
            style={{ marginRight: 10, position: 'relative', top: 4 }}
          />
          {meetup.location}
        </span>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
