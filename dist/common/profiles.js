"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profiles = {
    rpc: {
        mainnet: [
            { endpoint: 'https://mainnet1-seed.epic-chain.org:10111' },
            { endpoint: 'https://mainnet2-seed.epic-chain.org:10111' },
            { endpoint: 'https://mainnet3-seed.epic-chain.org:10111' },
            { endpoint: 'https://mainnet4-seed.epic-chain.org:10111' },
            { endpoint: 'https://mainnet5-seed.epic-chain.org:10111' },
        ],
        testnet: [
            { endpoint: 'https://testnet1-seed.epic-chain.org:20111' },
            { endpoint: 'https://testnet2-seed.epic-chain.org:20111' },
            { endpoint: 'https://testnet3-seed.epic-chain.org:20111' },
            { endpoint: 'https://testnet4-seed.epic-chain.org:20111' },
            { endpoint: 'https://testnet5-seed.epic-chain.org:20111' },
        ],
    },
    assets: [
        { id: '0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b', name: 'EpicChain', symbol: 'XPR', type: 'GoverningToken', precision: 0 },
        { id: '0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7', name: 'EpicPulse', symbol: 'XPP', type: 'UtilityToken', precision: 8 },
    ],
};
exports.default = profiles;
//# sourceMappingURL=profiles.js.map