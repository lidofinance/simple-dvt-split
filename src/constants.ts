export const contracts = {
  splitFactory: {
    1: '0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE',
    17000: '0x2ed6c4b5da6378c7897ac67ba9e43102feb694ee',
  },
  wrapperFactory: {
    1: {
      obol: '0xA9d94139A310150Ca1163b5E23f3E1dbb7D9E2A6',
      ssvWithoutFee: '0x3df147bd18854bfa03291034666469237504d4ca',
      ssvWithFee: '0x2bc222eda59056d7049f3746083c18550fec4e7f',
    },
    17000: {
      obol: '0x934ec6b68ce7cc3b3e6106c686b5ad808ed26449',
      ssvWithoutFee: '0xB7f465f1bd6B2f8DAbA3FcA36c5F5E49E0812F37',
      ssvWithFee: 'not_supported',
    },
  },
  treasury: {
    1: '0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c',
    17000: '0xE92329EC7ddB11D25e25b3c21eeBf11f15eB325d',
  },
};

export const treasuryShareByType = {
  wrapperWithoutFee: 250000,
  wrapperWithFee: 285714,
};
