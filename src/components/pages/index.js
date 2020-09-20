import {
  MdHome as HomeIcon,
  MdPieChart as PortfolioIcon,
  // MdShowChart as MarketsIcon,
} from 'react-icons/md'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'

import {Home} from './home'
import {Portfolio} from './portfolio'
import {Markets} from './markets'

export {Home, Portfolio, Markets}

export const pages = [
  {
    path: '/',
    icon: HomeIcon,
    component: Home,
  },
  {
    path: '/portfolio',
    icon: PortfolioIcon,
    component: Portfolio,
  },
  {
    path: '/markets',
    icon: MarketsIcon,
    component: Markets,
  },
]
