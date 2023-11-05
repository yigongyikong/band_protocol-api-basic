import {
    Client,
    Wallet,
    Obi,
    Message,
    Coin,
    Transaction,
    Fee,
} from '@bandprotocol/bandchain.js'

const grpcEndpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

async function exampleSendBlockTransaction() {
    // Step 1: Import a private key for signing transaction
    const { PrivateKey } = Wallet
    const mnemonic = 'image rescue habit liquid live edge income silk arm chuckle element clock danger kid company dentist kick cannon unveil asset supply cannon earth animal'
    const privateKey = PrivateKey.fromMnemonic(mnemonic)
    const pubkey = privateKey.toPubkey()
    const sender = pubkey.toAddress().toAccBech32()

    console.log(`mnemonic : ${mnemonic}`);
    console.log(`privateKey : ${privateKey}`);
    console.log(`pubkey : ${pubkey}`);
    console.log(`sender : ${sender}`);

    // Step 2.1: Prepare oracle request's properties
    const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
    console.log(`obi : ${obi}`);
    const calldata = obi.encodeInput({ symbols: ['ETH'], multiplier: 100 })
    console.log(`calldata : ${calldata}`);
    let coin = new Coin()
    coin.setDenom('uband')
    coin.setAmount('1000000')
    console.log(`coin : ${coin}`);

    let feeCoin = new Coin()
    feeCoin.setDenom('uband')
    feeCoin.setAmount('5000')
    console.log(`feeCoin : ${feeCoin}`);

    // Step 2.2: Create an oracle request message
    const requestMessage = new Message.MsgRequestData(
        37,
        calldata,
        4,
        3,
        'BandProtocol',
        sender,
        [coin],
        50000,
        200000,
    )
    console.log(`requestMessage : ${requestMessage}`);

    // Step 3.1: Construct a transaction
    const fee = new Fee()
    fee.setAmountList([feeCoin])
    fee.setGasLimit(1000000)
    const chainId = await client.getChainId()
    const txn = new Transaction()
    txn.withMessages(requestMessage)
    await txn.withSender(client, sender)
    txn.withChainId(chainId)
    txn.withFee(fee)
    txn.withMemo('')

    // Step 3.2: Sign the transaction using the private key
    const signDoc = txn.getSignDoc(pubkey)
    const signature = privateKey.sign(signDoc)

    const txRawBytes = txn.getTxData(signature, pubkey)

    console.log(`txn : ${txn}`);
    console.log(`txRawBytes : ${txRawBytes}`);
    // Step 4: Broadcast the transaction
    const sendTx = await client.sendTxBlockMode(txRawBytes)
    console.log(`sendTx : ${sendTx}`);

    return sendTx
}

; (async () => {
    console.log('Test sending an oracle request...')
    console.log(await exampleSendBlockTransaction())
})()
