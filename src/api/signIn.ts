const signInRequest = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://bbyvisit1.azurewebsites.net/visit/v1/agendas',
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
