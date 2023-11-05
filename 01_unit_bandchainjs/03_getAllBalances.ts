import { Client } from '@bandprotocol/bandchain.js';

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web';
const client = new Client(endpoint);

const getAllBalances = async (address: string) => {
    await client.getAllBalances(address)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

getAllBalances('band1v8a96wkg88qxsp3mmk4jz3sqadymrsjgjjddxk');

// console.log(res);
// [ { denom: 'uband', amount: '10000000' } ]