import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import StatusButton from '../StatusButton/StatusButton';
import {
  FilterArea,
  GridArea,
  KnowledgeWrapper,
  Select,
  StatusFlex,
} from './KnowledgeStyle';

const Knowledge = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all');
  const [statusData, setStatusData] = useState(['all']);
  const [firstSetData, setFirstSetData] = useState([]);
  const [secondSetData, setSecondData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState('select');

  // getting data from api
  const getData = async () => {
    const resp = await axios.get('/src/consts/dummyData.json');
    // setting main data
    setData(resp.data);
    // setting first filter data
    setFirstSetData(resp.data);
    // get available teams from the data
    const teams = ['select'];
    resp.data.map((item) => {
      item?.team.map((el) => {
        teams.includes(el) ? null : teams.push(el);
      });
    });
    setTeams(teams);
    // get available status from data
    const status = ['all'];
    resp.data.map((el) => {
      status.includes(el.status) ? null : status.push(el.status);
    });
    setStatusData(status);
  };

  useEffect(() => {
    getData();
  }, []);

  // handler for changing status
  const changeStatusHandler = () => {
    if (status === 'all') {
      setFirstSetData(data);
    } else {
      const filteredData = data.filter((item) => item.status === status);
      setTeam('select');
      setFirstSetData(filteredData);
    }
  };

  // run function when status is changed
  useEffect(() => {
    changeStatusHandler();
  }, [status]);

  // handler for changing team
  const changeTeamHandler = () => {
    if (team === 'select') {
      setSecondData(firstSetData);
    } else {
      const filteredData = firstSetData.filter((el) => {
        return el.team.includes(team);
      });
      setSecondData(filteredData);
    }
  };

  // team change handler have to run on every team change and filterdata change
  useEffect(() => {
    changeTeamHandler();
  }, [team, firstSetData]);

  return (
    <KnowledgeWrapper>
      <FilterArea>
        <StatusFlex>
          {statusData.map((item) => {
            return (
              <StatusButton text={item} status={status} setStatus={setStatus} />
            );
          })}
        </StatusFlex>
        <Select onChange={(e) => setTeam(e.target.value)} value={team}>
          {teams?.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </Select>
      </FilterArea>
      <GridArea>
        {secondSetData.map((item) => {
          return <Card {...item} />;
        })}
      </GridArea>
    </KnowledgeWrapper>
  );
};

export default Knowledge;
