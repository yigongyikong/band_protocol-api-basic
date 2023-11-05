import { Client } from '@bandprotocol/bandchain.js';

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web';
const client = new Client(endpoint);

const getLatestBlock = async() => {
    await client.getLatestBlock()
        .then( (res) => {
            // console.log(res.block?.header?.height);
            console.log(res);
        })
        .catch( (err) => {
            console.log(err);
        })
}

getLatestBlock();

// console.log(res);
// {
//     blockId: {
//       hash: '2l4OhsVgUeuxngm6618hJf/1lpYOiy2D8XNuZnj6qFo=',
//       partSetHeader: { total: 1, hash: 'OW7QdjhGRZQBhU6U4K69exzfyDo87ONSkH7qBCfWWBQ=' }
//     },
//     block: {
//       header: {
//         version: [Object],
//         chainId: 'band-laozi-testnet6',
//         height: 12262373,
//         time: [Object],
//         lastBlockId: [Object],
//         lastCommitHash: '4Q/RQSWiywaS0/SOvd+QUMEQaqYWJQU8/w759hSBnqI=',
//         dataHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
//         validatorsHash: 'QmlBSM00xWlsxcPDCoeLWY9ND5XWXxNoBdaa8QV9wSU=',
//         nextValidatorsHash: 'QmlBSM00xWlsxcPDCoeLWY9ND5XWXxNoBdaa8QV9wSU=',
//         consensusHash: 'sL3zQpDJv4zgZ1L9miS7JWH+7jNTpvz3+HT8gfAWc3w=',
//         appHash: 'AStuV9aonruWnPxGdLgDV98zS0QwuRWS4diQisjN5G0=',
//         lastResultsHash: 'pIGVPatsSiCPXKwIZrL6YihizsT+HmO9GBLWsKnfdio=',
//         evidenceHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
//         proposerAddress: 'gpa9Ml6BIih0s7gZGRCL0FoophY='
//       },
//       data: { txsList: [] },
//       evidence: { evidenceList: [] },
//       lastCommit: {
//         height: 12262372,
//         round: 0,
//         blockId: [Object],
//         signaturesList: [Array]
//       }
//     },
//     sdkBlock: undefined
//   }