import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {ReflectionServiceClient} from "./api-spec/protobuf/gen/js/reflection/v1/service_pb.client";
import {createChannel, createClient} from "nice-grpc-web";

function App() {
  useEffect(() => {
    const channel = createChannel('http://localhost:9000')
    const client = createClient(
      ReflectionServiceClient,
      channel,
    );
    client.getInfo().then((response) => {
      console.log(response);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
