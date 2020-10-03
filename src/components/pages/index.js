import {
  MdHome as HomeIcon,
  MdPieChart as PortfolioIcon,
  // MdShowChart as MarketsIcon,
} from 'react-icons/md'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {BiNews as NewsIcon} from 'react-icons/bi'

import {News} from './news'
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
  {
    path: '/news',
    icon: NewsIcon,
    component: News,
  },
]
