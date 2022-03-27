import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    farmName: 'BHC Maxi',
    image: 'BHC',
    pid: 0,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
      43114: '0xa8752333f6a6fe47323a4eDAC3D09Bb1048A0E23',
    },
    token: tokens.bhc,
    quoteToken: tokens.wavax,
    farmAddress: '0x5Dd5F08052C44AdA503415b91997cE187046F6A5',
    earn: 'BHC',
    buyURL: `https://exchange.hakuswap.com/#/swap?inputCurrency=0xa8752333f6a6fe47323a4edac3d09bb1048a0e23`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 14/Feb/2022',
    category: 'emotional',
  },
]

export default farms
