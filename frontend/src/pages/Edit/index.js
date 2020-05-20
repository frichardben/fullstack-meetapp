import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';
import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function Edit({ match }) {
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
          "d 'de' MMMM', às' HH'h",
          {
            locale: pt,
          }
        ),
      };
      setMeetup(data);
    }
    loadMeetup();
  }, [id]);

  async function handleSubmit({
    user_id,
    title,
    description,
    location,
    date,
    file_id,
  }) {
    try {
      await api.put(`meetups/${id}`, {
        user_id,
        title,
        description,
        location,
        date,
        file_id,
      });
      toast.success('Meetup editado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      toast.error('Erro ao editar meetup, tente novamente.');
    }
  }
  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <button className="btn" type="submit">
          <MdAddCircleOutline
            color="#fff"
            style={{ marginRight: 10 }}
            size={20}
          />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
