import React from 'react'
import { CommunityTag, CoreTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import { CardHeader, CardLabel, CardTitle } from './FarmCardStyles'

export interface ExpandableSectionProps {
  lpLabel?: string
  stakeNote?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  stakeNote,
}) => {
  const TranslateString = useI18n()
  return (
    <CardHeader>
      <CardLabel>APR:</CardLabel>
      <CardTitle>{lpLabel}</CardTitle>
    </CardHeader>
  )
}

export default CardHeading
