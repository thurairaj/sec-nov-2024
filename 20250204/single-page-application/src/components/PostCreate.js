'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PostCreate({ userId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [status, setStatus] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: title,
        description: description,
        userId: userId,
      },
    );

    setStatus(`Post created successfully with id ${response.data.id}`);
  };

  return (
    <div>
      <h1>Create A Post</h1>
      <form onSubmit={submitHandler}>
        <div className={'container'}>
          <label htmlFor="title">Title:</label>
          <input
            id={'title'}
            type={'text'}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={'container'}>
          <label htmlFor="description">Description:</label>
          <input
            id={'description'}
            type={'text'}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <p>{status}</p>
      </form>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          gap: 1em;
          padding: 1rem;
        }

        input {
          padding: 0.5em;
          font-size: 1.2em;
          flex-grow: 2;
        }
      `}</style>
    </div>
  );
}
