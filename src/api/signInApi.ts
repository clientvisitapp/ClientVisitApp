import {Buffer} from 'buffer';
import {loginCredentials} from '../types';

const signInRequest = (value: loginCredentials) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://bbyvisit1.azurewebsites.net/visit/v1/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: value.username,
            password: Buffer.from(value.password).toString('base64'),
          }),
        },
      );
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        resolve(data);
      } else reject(JSON.stringify('not successful'));
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });

export {signInRequest};
