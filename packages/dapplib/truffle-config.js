require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind artist hunt dry flower spread'; 
let testAccounts = [
"0xd28a1b46547d0757eb8f46f04e0d316c6691bb4408fa3fd1ae27c2d28d34126f",
"0x4c3d60b8a46521e6fbadeb8a175807780021c9fabd6db5826a3f4f2e66b7e0f3",
"0x99ebc9021c268d32b9f353e8372f7fee6625bec65f13177fb4362c194dec2f8b",
"0x1bdac264be313a9f29bb20df0b50a3f61060d0c7071e666fe5c41b6dd567e5fb",
"0x429a8ea90f82de43f6a08e2c759f6f7acb9e95e71ac719844d9b74276e36f099",
"0xf7c847030f0b708cf37d51eda3e41807f39f2cb73c37d82f0189e1896b1a7e42",
"0x4761ee42ea2fa26061c1ffd8e0fbbeeb6b6244eee06cec9f41cb8333a96c261d",
"0xc3dc6fdf0126db6b083153c4ad98d61804bd7eb27621eee2731f1f04377e2d95",
"0xe155ea69b85be89cff0d0a083fa0eb525636d1e9ed0f98eb4e1aee0c10ecec43",
"0x9851a6d1ae4e241e7305b64d380ea9e44f20363d9c20756014d30eb2cdc29f9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

