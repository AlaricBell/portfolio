import type { NextPage } from 'next'

import LayoutPrimary from '../components/layout/LayoutPrimary'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <LayoutPrimary>
      <Welcome />
    </LayoutPrimary>
  )
}

export default Home
