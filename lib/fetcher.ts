

const fetcher = (args: string) => fetch(`https://pilot.laheri.co.ke/voting/${args}`, {
  headers: {
    'Content-Type': 'application/json',
    // Include other headers as needed
  },
}).then(res => res.json());

export default fetcher