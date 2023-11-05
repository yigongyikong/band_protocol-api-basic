import { Client } from '@bandprotocol/bandchain.js';

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web';
const client = new Client(endpoint);

const getChainId = async () => {
    await client.getChainId()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

getChainId();

// console.log(res);
// band-laozi-testnet6