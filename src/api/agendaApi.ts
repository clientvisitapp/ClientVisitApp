const agendaRequest = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://bbyvisit1.azurewebsites.net/visit/v1/agendas',
      );
      if (response.status === 200) {
        const data = await response.json();
        resolve(data);
      } else reject(JSON.stringify('not successful'));
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });

export {agendaRequest};
