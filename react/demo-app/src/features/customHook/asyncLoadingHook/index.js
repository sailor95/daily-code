/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../../ui-utils/styles-template.module.scss';

const useAsyncLoadingHook = (secret, query) => {
  const [images, addImages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const unsplashUrl = `https://api.unsplash.com/search/photos`;
  const url = `${unsplashUrl}?client_id=${secret}&query=${query}`;

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const res = await axios(url);
        setLoading(false);
        addImages(res.data.results);
        setError(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [query, secret]);

  return [images, error, isLoading];
};

const UnsplashImg = () => {
  const [secret, setSecret] = useState('');
  const [query, setQuery] = useState('Games');
  const [images, error, isLoading] = useAsyncLoadingHook(secret, query);

  const renderImages = () =>
    images.map(img => (
      <img alt="Slow connection" key={img.id} src={img.urls.small} />
    ));

  console.log('Again', images);

  return (
    <div className={styles.container}>
      <h1>Load Unsplash Images</h1>
      <div>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <input
          placeholder="Paste unsplash access key..."
          value={secret}
          onChange={e => setSecret(e.target.value)}
        />
      </div>
      {isLoading && 'Loading...'}
      {error || renderImages()}
    </div>
  );
};

export default UnsplashImg;
