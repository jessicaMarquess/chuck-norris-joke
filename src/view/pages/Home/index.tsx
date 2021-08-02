import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
import api from '../../../services/api';

import Loader from '../../../assets/img/chuck-norris.gif'

import { Container } from './styles';

interface IData {
  id: string;
  icon_url: string;
  value: string;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IData>();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    api.get('random').then(
      response => {
        setData(response.data);
      }
    ).catch(error => toast.error('Eita, Giovanna! O forninho caiu!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })).finally(() => {
      setIsLoad(false);
    })
  }, [])

  if( isLoad ) {
    return (
      <Container>
        <div className="loader">
          <img src={ Loader } alt="Um loading do baum"/>
        </div>
      </Container>
    );
  }

  return (
    <Container>
        <div className="content">
          <img src={data?.icon_url} alt="Icone" />
          <h1>{data?.value}</h1>
        </div>
    </Container>
  );
}

export default Home;