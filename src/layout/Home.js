import React from 'react';
import Select from 'react-select';
import data from '../data.json';

const Home = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh'
      }}>
        <div style={{
            width: "30rem",
            marginTop: '20px'
        }}>
        <Select
            options={data.map(
                ({ id, name }) => {
                    return {
                        value: id,
                        label: name,
                    };
                }
            )}
        />
        </div>
    </div>
  );
};

export default Home;

