import { Client } from '@bandprotocol/bandchain.js';

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web';
const client = new Client(endpoint);

const getDataSource = async (id: number) => {
    await client.getDataSource(id)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

getDataSource(2);

// console.log(res);
// {
//     owner: 'band1m5lq9u533qaya4q3nfyl6ulzqkpkhge9q8tpzs',
//     name: 'DS2',
//     description: 'DS2',
//     filename: '9bfcc1bad777159bd977baba5904cdaec8fddf0a5687e38fd1a6a55975681553',
//     treasury: 'band1m5lq9u533qaya4q3nfyl6ulzqkpkhge9q8tpzs',
//     feeList: []
//   }