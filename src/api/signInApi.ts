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
      } else reject('not successful');
      // } else resolve({name: 'as', password: 'vd'});
    } catch (error) {
      // resolve({name: 'as', password: 'vd'});
      reject(JSON.stringify(error));
    }
  });

export {signInRequest};
