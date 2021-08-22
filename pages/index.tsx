import type { NextPage } from 'next'
import Introduction from '../components/Introduction'

import LayoutPrimary from '../components/layout/LayoutPrimary'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <LayoutPrimary>
      <Welcome />
      <Introduction />
    </LayoutPrimary>
  )
}

export default Home
