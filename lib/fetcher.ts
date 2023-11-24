

const fetcher = (args: string) => fetch(`http://ec2-51-20-14-239.eu-north-1.compute.amazonaws.com/${args}`).then(res => res.json());

export default fetcher