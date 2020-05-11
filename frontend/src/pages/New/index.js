import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

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

export default function New() {
  async function handleSubmit({ title, description, location, date, file_id }) {
    try {
      await api.post('meetups', {
        title,
        description,
        location,
        date,
        file_id,
      });

      toast.success('Meetup criado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      const errData = error.response.data;
      toast.error(
        errData && errData.error
          ? `Error creating meetup: ${errData.error}`
          : 'Error creating meetup, try again'
      );
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          placeholder="Descrição do completa"
          multiline
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Locatização " />
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
