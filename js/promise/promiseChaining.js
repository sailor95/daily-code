// Foreach chaining ////////////////////////////////////////////////////////////
const urls = ['url_1', 'url_2', 'url_3'];

fetch(urls[0])
  .then(() => {
    // Process data here
  })
  .then(() =>
    fetch(urls[1]).then(() => {
      // Process data here
    })
  )
  .then(() =>
    fetch(urls[2]).then(() => {
      // Process data here
    })
  );

// Same as
let sequence = Promise.resolve();
urls.forEach(url => {
  sequence = sequence.then(() =>
    fetch(url).then(() => {
      // Process data here
    })
  );
});

// Same as
urls.reduce(
  (sequence, url) =>
    sequence.then(() =>
      fetch(url).then(() => {
        // Process data here
      })
    ),
  Promise.resolve()
);

// Parallelism /////////////////////////////////////////////////////////////////
// When the order of result matters
Promise.all(urls.map(url => fetch(url))).then(arrayOfValue => {
  arrayOfValue.forEach(() => {
    // Process data here
  });
});

// When want to parallel the url call, yet only process the data after previous data is processed
const arrayOfFetchPromise = urls.map(url => fetch(url));
const sequence = Promise.resolve();

arrayOfFetchPromise.forEach(fetchPromise => {
  sequence = sequence.then(() =>
    fetchPromise.then(() => {
      // Process data here
    })
  );
});
