export default function handler(req: any, res: any) {
  res.status(200).json({
    name: "Gasvard Web3 Auth",
    infura_id: process.env.INFURA_KEY,
    chain_id: process.env.CHAIN_ID,
    network_name: process.env.NETWORK_NAME,
    // usdt_contract_address: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
    // usdt_contract_address: "0x4F4495243837681061C4743b74B3eEdf548D56A5",
    // usdt_contract_address: "0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990",
    usdt_contract_address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
  });
}
