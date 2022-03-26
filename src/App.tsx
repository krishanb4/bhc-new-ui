import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const CustomHomePage = lazy(() => import('./views/CustomHomePage'))
const Farms = lazy(() => import('./views/Farms'))
const CustomExchanges = lazy(() => import('./views/CustomExchanges'))
const PitchDeck = lazy(() => import('./views/PitchDeck'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Collectibles = lazy(() => import('./views/Collectibles'))
// const Teams = lazy(() => import('./views/Teams'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const Profile = lazy(() => import('./views/Profile'))
// const TradingCompetition = lazy(() => import('./views/TradingCompetition'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

declare const window: any

window.prices = {
  // Fantom Opera
  '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83': 3, // WFTM
  '0x7BEB05cf5681f402E762F8569c2Fc138a2172978': 140, // BHC
  '0xAC1F25AEE575D35C668B0a4D336f20E3e92adCd2': 1.4, // HPS
  '0x20951B5cEC16815FE160e7a1453a94912AfD31B2': 0, // BHC-FTM JetSwap LP
  '0xa42DE2C3847b96894D44E8A8258A838FAaD9dD5f': 0, // HPS-FTM SpiritSwap LP
}

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    // console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <CustomHomePage />
            </Route>
            {/* <Route path="/farms">
              <Farms />
            </Route> */}
            <Route path="/exchanges">
              <CustomExchanges />
            </Route>
            <Route path="/pools">
              <Farms />
            </Route>

            <Route path="/pitch-deck">
              <PitchDeck />
            </Route>
            {/* <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/ifo">
              <Ifos />
            </Route>
            <Route path="/collectibles">
              <Collectibles />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/competition">
              <TradingCompetition />
            </Route> */}
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      {/*  <EasterEgg iterations={2} /> */}
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
