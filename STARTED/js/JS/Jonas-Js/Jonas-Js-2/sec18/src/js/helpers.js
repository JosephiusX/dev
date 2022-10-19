import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]); // fetch creates a promise so it must be awaited
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status}`); // if the response has ok set to false its an error, so we log the response message and status code
    return data;
  } catch (err) {
    throw err;
  }
};
