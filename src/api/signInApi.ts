const signInRequest = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://bbyvisit1.azurewebsites.net/visit/v1/agendas',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        },
      );
      if (response.status === 200) {
        const data = await response.json();
        resolve(data);
      } else reject('not successful');
    } catch (error) {
      reject(error);
    }
  });

export {signInRequest};
