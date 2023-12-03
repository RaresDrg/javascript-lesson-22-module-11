// Decodare in promise.all //
const fetchUsers = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const firstResponse = fetch(`${baseUrl}/users/1`);
  const secondResponse = fetch(`${baseUrl}/users/2`);
  const thirdResponse = fetch(`${baseUrl}/users/3`);

  const arrayOfPromises = await Promise.all([
    (await firstResponse).json(),
    (await secondResponse).json(),
    (await thirdResponse).json(),
  ]);
  console.log(arrayOfPromises, '"decodare" in promise.all');
};
fetchUsers();

// Decodare separata //
const fetchUsers1 = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const firstResponse = fetch(`${baseUrl}/users/4`);
  const secondResponse = fetch(`${baseUrl}/users/5`);
  const thirdResponse = fetch(`${baseUrl}/users/6`);

  const firstData = (await firstResponse).json();
  const secondData = (await secondResponse).json();
  const thirdData = (await thirdResponse).json();

  const arrayOfPromises = await Promise.all([firstData, secondData, thirdData]);
  console.log(arrayOfPromises, '"decodare" separata pentru fiecare');
};
fetchUsers1();

//Decodare: map, conspect //
const fetchUsers2 = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [7, 8, 9];

  // 1. Creăm o matrice de promisuri
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Rulăm toate promisurile în paralel și așteptăm ca acestea să se finalizeze
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUsers2();
