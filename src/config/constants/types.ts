import { TranslatableText } from 'state/types'

export interface Address {
  97?: string
  56: string
}

export interface Token {
  symbol: string
  address?: Address
  decimals?: number
  projectLink?: string
}

export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}

// bhc
interface balance {
  token: Token
  limit: number
}

export type IfoStatus = 'idle' | 'coming_soon' | 'live' | 'finished'

interface IfoPoolInfo {
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  distributionRatio: number // Range [0-1]
}

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  currency: Token
  token: Token
  releaseBlockNumber: number
  campaignId?: string
  link: string
  [PoolIds.poolBasic]?: IfoPoolInfo
  [PoolIds.poolUnlimited]?: IfoPoolInfo
  isV1?: boolean
  // V1 only - To be removed when old card are migrated
  subTitle?: string
  description?: string
  launchDate?: string
  launchTime?: string
  saleAmount?: string
  raiseAmount?: string
  cakeToBurn?: string
  projectSiteUrl?: string
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface FarmConfig {
  farmName?: string
  pid: number
  lpSymbol: string
  lpAddresses: Address
  token: Token
  token2?: Token
  token3?: Token
  quoteToken: Token
  multiplier?: string
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  farmAddress: string
  earn: string
  earn2?: string
  earn3?: string
  buyURL: string

  dualEarn?: boolean
  image?: string
  end?: number
  factor?: number
  start?: string
  ended?: boolean
  isBNB?: boolean
  locked?: boolean
  stakeNote?: string
  info?: string
  balanceCheck?: boolean
  balanceConstraints?: balance[]
  limitCheck?: boolean
  limit?: number
  category?: string
}

export interface PoolConfig {
  sousId: number
  earningToken: Token
  stakingToken: Token
  stakingLimit?: number
  contractAddress: Address
  poolCategory: PoolCategory
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type NftImages = {
  blur?: string
} & Images

export type NftVideo = {
  webm: string
  mp4: string
}

export type Nft = {
  name: string
  description: string
  images: NftImages
  sortOrder: number
  bunnyId: number
  video?: NftVideo
}

export type TeamImages = {
  alt: string
} & Images

export type Team = {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}

export type CampaignType = 'ifo' | 'teambattle'

export type Campaign = {
  id: string
  type: CampaignType
  title?: TranslatableText
  description?: TranslatableText
  badge?: string
}

export type PageMeta = {
  title: string
  description: string
  image: string
}
