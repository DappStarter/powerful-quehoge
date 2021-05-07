require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind concert grace drop supply slab'; 
let testAccounts = [
"0xc400912dadadb8034da43e9a257c0042bbfcaf8c79109f5059deb2afc0451b03",
"0x5ab64351f1c2c0f8a8ab4ea2b07f7a1c513f6ba9b120dafb625e342c6ad4f6f4",
"0x4f446ccbc2c739ddc851581a3c7bf523cbb07df37618a0c8403277bcbd19dcaf",
"0xb1b0c7a8a0e5196a68aab3fd44aef388d3eadd7f36e78d16d4c6ff211475aeaf",
"0x0e9125521c2a1dd39d60263a0d6353fd7bfe0504eeffb5ce1bc9134fc7d8b4dd",
"0x072cda7fe03a497c9c266a860d431568d5935975ec00d22c2ac6b9ec1591872c",
"0x383c25f339c0b7bbd8605268b78121d8fe7f60e2fb2c347fb20031b4b0f268ee",
"0xa77ddaa8595a4f408cb8577461dde70151d3984c37d0916ad77abe3e3227cdfc",
"0x62e12bd47d600d78dc8fbd761bc331fa01a0d8428eb76ed45cef8a584a962eb8",
"0x3cdb489e6dfa378cb046bcb9ac366c4a57ab92610bb5cf09cfb4c1a28c504ff7"
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
            version: '^0.5.11'
        }
    }
};
