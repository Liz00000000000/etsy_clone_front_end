import React, { Component } from 'react'
import '../Styles/Nav.css'
import { NavLink } from 'react-router-dom'

export class Another extends Component {

    isCart = (array) => {
        if (array === null){
            return 'Cart Empty'
        } else {
            return 'Checkout'
        }
      }
  
      userLoggedIn = (obj) => {
          if(obj === {} ){
              return <NavLink to='/login'>Log In</NavLink>
          } else {
              return `Welcome ${obj.first_name}`
          }
      }

    render() {
        if(this.props.loggedInUser.first_name === 'User') return (
            <div>
                <div className='navbar'> <NavLink to='/login'>Log In of Create An Acount</NavLink></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 20 1440 80" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                    <path d="M1692.8 -90.2 C1692.6 -90.2 1692.4 -90.2 1692.1 -90.3 C-85.8 -51.3 -82.7 -50.5 -79.4 -49.9 -79.6 -49.8 -79.8 -49.7 -80 -49.6 -82.4 -46.1 -83.7 -42.9 -78.8 -40.8 -66.3 -35.4 -59.7 -28.6 -60 -20 -60.3 -13.3 -66.4 -5.6 -59.3 -0.2 -57.2 0.2 -54.8 0.5 -52.4 0.7 -51.2 4.7 -50.7 8.9 -50.1 12.9 -49.5 17.4 -45.8 20.4 -35.3 21.6 -35.9 22.1 -36.6 22.7 -37.5 23.4 -36.3 24.8 -35.5 26.4 -30.4 26.6 -23.8 26.9 -22 28.6 -21.3 30.7 -21 31.7 -21.8 33.1 -19.4 33.5 -7.2 36 -9.9 41.8 -10 47.1 -10 49.7 -8.7 52 -13.6 55.3 -20.1 59.7 -18.5 60.8 -6.3 60 4.7 59.4 15.2 59.2 26.2 58.4 47.1 57 66.9 56.7 88.8 54.2 96.9 53.3 104.5 52.2 109.6 53.5 112.6 54.3 117.8 53.2 122.3 52.1 129.2 50.4 133.7 50.2 137 51.4 140.7 52.7 146.9 52.8 154.2 52.4 162.9 51.9 171.1 51.9 175.9 53.4 180.2 54.8 185 54.2 192.6 51.9 213 45.7 235.1 40.8 257.1 36.8 285.1 31.7 313.2 26.4 339.4 26.2 348.9 26.1 356.4 26.1 358.9 28.7 363.7 33.6 373.7 36.1 394.8 34.3 400.4 33.9 406 33.2 411.6 32.7 426.9 31.4 441.6 30.4 454.5 31.2 462.3 31.6 467.1 33.1 473.6 33.9 482.2 35 489 36.8 501.7 36.4 512.6 36.1 519.7 38.5 527.5 40.1 530.1 40.7 532.6 41.1 537.2 40.5 546.7 39.3 552.5 40.2 558.8 40.9 570.9 42.2 579.2 45 590.8 46.4 598.4 47.3 606.4 48 619.4 44.7 627.9 42.5 636.1 41.7 643.4 42 647.5 42.1 653 42.1 657.5 40.7 669.8 36.8 682 35.8 694.3 33.8 713.6 30.6 732.9 28.2 750 27.2 762.6 26.5 774.4 27 786.8 26.9 794.6 26.8 802 26.6 810.6 25.6 813.9 25.2 817.2 24.6 820.5 24.5 849.2 22.9 871.3 25.7 900.8 23.6 914.1 22.6 922.5 25.1 934.7 24.4 952.9 23.4 963.6 24.7 969.5 28.8 971 29.8 974.8 30.7 981.6 29.3 1007.2 24.2 1029.2 22.4 1047.5 24.3 1052.9 24.9 1058.8 24 1063.9 21.2 1068.6 18.8 1075.4 16.9 1082 15 1100.5 9.5 1120.2 6.6 1139.3 2.5 1154.7 -0.7 1169 -1.2 1184.2 -4.4 1190.2 -5.7 1195.5 -5.6 1200 -5.2 1206.8 -4.5 1215.2 -5.5 1223.5 -7.8 1239.1 -12.1 1254.8 -14.1 1269.8 -15.9 1285 -17.8 1299.6 -20 1314.8 -23.5 1327.7 -26.4 1341 -29 1351.5 -27.6 1360.4 -26.3 1376 -28.2 1388.5 -31.7 1411.8 -38.4 1412 -38.4 1427.3 -35.6 1429.2 -35.2 1430.2 -34.6 1432.1 -34.3 1436.3 -33.7 1441.4 -33.7 1448.2 -34.6 1469.5 -37.6 1488 -39 1496.2 -34 1499.6 -31.9 1505.3 -32.4 1514 -35.4 1519.3 -37.2 1524.4 -39 1530.4 -40 1547.4 -43 1564.7 -46.1 1580.6 -47.2 1601.3 -48.6 1622.8 -50.9 1644.2 -53.6 1659 -55.5 1675 -58 1690.6 -61.5 1696.6 -62.9 1698.4 -63.8 1698 -65.3 1695.9 -73.6 1695.8 -82.2 1692.8 -90.2 Z" fill="#232345"></path>
                    <path d="M31.7 12.7 C31.9 12.7 32.1 12.6 32.3 12.6 C1808.2 -82.3 1805.2 -81.2 1801.9 -80.4 1802.1 -80.3 1802.3 -80.2 1802.5 -80.1 1805.1 -76.8 1806.7 -73.7 1802 -71.3 1789.9 -64.9 1783.9 -57.6 1784.8 -49.1 1785.6 -42.5 1792.3 -35.2 1785.6 -29.3 1783.5 -28.7 1781.2 -28.3 1778.8 -27.9 1777.9 -23.8 1777.7 -19.6 1777.4 -15.5 1777.1 -11 1773.6 -7.8 1763.3 -5.8 1763.9 -5.3 1764.6 -4.7 1765.6 -4.2 1764.5 -2.7 1763.9 -1 1758.8 -0.4 1752.3 0.4 1750.6 2.2 1750.1 4.4 1749.8 5.4 1750.7 6.7 1748.4 7.3 1736.4 10.7 1739.5 16.3 1739.9 21.5 1740.2 24.1 1739.1 26.6 1744.2 29.5 1751 33.4 1749.5 34.5 1737.2 34.7 1726.2 34.9 1715.8 35.5 1704.8 35.6 1683.8 35.8 1664.1 36.9 1642 36.1 1633.9 35.8 1626.2 35.3 1621.2 36.9 1618.3 37.9 1613 37.2 1608.4 36.5 1601.5 35.3 1596.9 35.5 1593.8 36.9 1590.1 38.5 1583.9 39.1 1576.6 39.2 1568 39.4 1559.8 40 1555.1 41.8 1550.9 43.5 1546.1 43.3 1538.3 41.6 1517.5 37 1495.1 33.7 1472.8 31.4 1444.6 28.4 1416.2 25.3 1390 27 1380.6 27.6 1373 28.2 1370.7 31 1366.4 36.2 1356.5 39.4 1335.4 39.3 1329.8 39.2 1324.1 39 1318.5 38.9 1303.1 38.8 1288.4 38.9 1275.6 40.6 1267.8 41.6 1263.2 43.5 1256.8 44.8 1248.2 46.5 1241.7 48.9 1229 49.4 1218.1 49.9 1211.1 52.9 1203.5 55 1200.9 55.8 1198.4 56.4 1193.8 56.2 1184.2 55.6 1178.6 57 1172.3 58.1 1160.4 60.3 1152.3 63.7 1140.8 66.1 1133.4 67.6 1125.4 68.8 1112.2 66.5 1103.6 65 1095.3 64.7 1088.1 65.6 1084 66.1 1078.5 66.5 1073.9 65.4 1061.3 62.4 1049.1 62.4 1036.7 61.3 1017.2 59.5 997.7 58.6 980.6 58.9 968.1 59.1 956.3 60.5 943.9 61.3 936.1 61.8 928.7 62.2 920 61.8 916.7 61.7 913.4 61.4 910.2 61.5 881.4 62 859.6 66.5 830 66.6 816.7 66.7 808.4 69.8 796.2 70 778.1 70.3 767.4 72.5 761.9 77 760.4 78.1 756.7 79.3 749.8 78.4 723.9 75.2 701.9 75.1 683.7 78.4 678.4 79.4 672.5 78.9 667.2 76.5 662.3 74.4 655.4 73.1 648.6 71.6 629.8 67.6 610 66.2 590.6 63.6 575 61.5 560.7 62.1 545.2 60 539.2 59.2 533.9 59.7 529.5 60.4 522.8 61.6 514.3 61.3 505.8 59.6 490 56.5 474.2 55.6 459.1 55 443.7 54.3 429.1 53.2 413.6 50.8 400.5 48.9 387 47.3 376.8 49.5 368 51.4 352.2 50.7 339.5 48.1 315.8 43.3 315.6 43.3 300.5 47.2 298.7 47.7 297.7 48.4 295.8 48.8 291.7 49.8 286.6 50.2 279.7 49.7 258.3 48.3 239.7 48.3 232 54 228.7 56.3 223 56.2 214 53.9 208.7 52.6 203.5 51.1 197.4 50.5 180.2 48.9 162.8 47.1 146.8 47.2 126 47.3 104.4 46.6 82.9 45.5 68 44.7 51.8 43.5 36 41.2 29.9 40.3 28.1 39.5 28.3 37.9 29.8 29.5 29.3 21 31.7 12.7 Z" fill="#232345"></path>
                </svg>
                </div>
            </div>
        )
        return (
            <div>
            <div className='navbar'>
                 <NavLink className='navSpacing' to='/favorites'>My Favorites</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}</NavLink>
               <NavLink className='navSpacing' to='/checkout'>{this.isCart(this.props.cart)}</NavLink>
               <NavLink className='navSpacing' to='/'>Browse Items</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.props.loggedInUser.first_name === 'User' ? <NavLink to='/login'>Log In</NavLink> : 'Sign Out' }</NavLink>
            </div>
             <div>
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 20 1440 80" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                 <path d="M1692.8 -90.2 C1692.6 -90.2 1692.4 -90.2 1692.1 -90.3 C-85.8 -51.3 -82.7 -50.5 -79.4 -49.9 -79.6 -49.8 -79.8 -49.7 -80 -49.6 -82.4 -46.1 -83.7 -42.9 -78.8 -40.8 -66.3 -35.4 -59.7 -28.6 -60 -20 -60.3 -13.3 -66.4 -5.6 -59.3 -0.2 -57.2 0.2 -54.8 0.5 -52.4 0.7 -51.2 4.7 -50.7 8.9 -50.1 12.9 -49.5 17.4 -45.8 20.4 -35.3 21.6 -35.9 22.1 -36.6 22.7 -37.5 23.4 -36.3 24.8 -35.5 26.4 -30.4 26.6 -23.8 26.9 -22 28.6 -21.3 30.7 -21 31.7 -21.8 33.1 -19.4 33.5 -7.2 36 -9.9 41.8 -10 47.1 -10 49.7 -8.7 52 -13.6 55.3 -20.1 59.7 -18.5 60.8 -6.3 60 4.7 59.4 15.2 59.2 26.2 58.4 47.1 57 66.9 56.7 88.8 54.2 96.9 53.3 104.5 52.2 109.6 53.5 112.6 54.3 117.8 53.2 122.3 52.1 129.2 50.4 133.7 50.2 137 51.4 140.7 52.7 146.9 52.8 154.2 52.4 162.9 51.9 171.1 51.9 175.9 53.4 180.2 54.8 185 54.2 192.6 51.9 213 45.7 235.1 40.8 257.1 36.8 285.1 31.7 313.2 26.4 339.4 26.2 348.9 26.1 356.4 26.1 358.9 28.7 363.7 33.6 373.7 36.1 394.8 34.3 400.4 33.9 406 33.2 411.6 32.7 426.9 31.4 441.6 30.4 454.5 31.2 462.3 31.6 467.1 33.1 473.6 33.9 482.2 35 489 36.8 501.7 36.4 512.6 36.1 519.7 38.5 527.5 40.1 530.1 40.7 532.6 41.1 537.2 40.5 546.7 39.3 552.5 40.2 558.8 40.9 570.9 42.2 579.2 45 590.8 46.4 598.4 47.3 606.4 48 619.4 44.7 627.9 42.5 636.1 41.7 643.4 42 647.5 42.1 653 42.1 657.5 40.7 669.8 36.8 682 35.8 694.3 33.8 713.6 30.6 732.9 28.2 750 27.2 762.6 26.5 774.4 27 786.8 26.9 794.6 26.8 802 26.6 810.6 25.6 813.9 25.2 817.2 24.6 820.5 24.5 849.2 22.9 871.3 25.7 900.8 23.6 914.1 22.6 922.5 25.1 934.7 24.4 952.9 23.4 963.6 24.7 969.5 28.8 971 29.8 974.8 30.7 981.6 29.3 1007.2 24.2 1029.2 22.4 1047.5 24.3 1052.9 24.9 1058.8 24 1063.9 21.2 1068.6 18.8 1075.4 16.9 1082 15 1100.5 9.5 1120.2 6.6 1139.3 2.5 1154.7 -0.7 1169 -1.2 1184.2 -4.4 1190.2 -5.7 1195.5 -5.6 1200 -5.2 1206.8 -4.5 1215.2 -5.5 1223.5 -7.8 1239.1 -12.1 1254.8 -14.1 1269.8 -15.9 1285 -17.8 1299.6 -20 1314.8 -23.5 1327.7 -26.4 1341 -29 1351.5 -27.6 1360.4 -26.3 1376 -28.2 1388.5 -31.7 1411.8 -38.4 1412 -38.4 1427.3 -35.6 1429.2 -35.2 1430.2 -34.6 1432.1 -34.3 1436.3 -33.7 1441.4 -33.7 1448.2 -34.6 1469.5 -37.6 1488 -39 1496.2 -34 1499.6 -31.9 1505.3 -32.4 1514 -35.4 1519.3 -37.2 1524.4 -39 1530.4 -40 1547.4 -43 1564.7 -46.1 1580.6 -47.2 1601.3 -48.6 1622.8 -50.9 1644.2 -53.6 1659 -55.5 1675 -58 1690.6 -61.5 1696.6 -62.9 1698.4 -63.8 1698 -65.3 1695.9 -73.6 1695.8 -82.2 1692.8 -90.2 Z" fill="#232345"></path>
                 <path d="M31.7 12.7 C31.9 12.7 32.1 12.6 32.3 12.6 C1808.2 -82.3 1805.2 -81.2 1801.9 -80.4 1802.1 -80.3 1802.3 -80.2 1802.5 -80.1 1805.1 -76.8 1806.7 -73.7 1802 -71.3 1789.9 -64.9 1783.9 -57.6 1784.8 -49.1 1785.6 -42.5 1792.3 -35.2 1785.6 -29.3 1783.5 -28.7 1781.2 -28.3 1778.8 -27.9 1777.9 -23.8 1777.7 -19.6 1777.4 -15.5 1777.1 -11 1773.6 -7.8 1763.3 -5.8 1763.9 -5.3 1764.6 -4.7 1765.6 -4.2 1764.5 -2.7 1763.9 -1 1758.8 -0.4 1752.3 0.4 1750.6 2.2 1750.1 4.4 1749.8 5.4 1750.7 6.7 1748.4 7.3 1736.4 10.7 1739.5 16.3 1739.9 21.5 1740.2 24.1 1739.1 26.6 1744.2 29.5 1751 33.4 1749.5 34.5 1737.2 34.7 1726.2 34.9 1715.8 35.5 1704.8 35.6 1683.8 35.8 1664.1 36.9 1642 36.1 1633.9 35.8 1626.2 35.3 1621.2 36.9 1618.3 37.9 1613 37.2 1608.4 36.5 1601.5 35.3 1596.9 35.5 1593.8 36.9 1590.1 38.5 1583.9 39.1 1576.6 39.2 1568 39.4 1559.8 40 1555.1 41.8 1550.9 43.5 1546.1 43.3 1538.3 41.6 1517.5 37 1495.1 33.7 1472.8 31.4 1444.6 28.4 1416.2 25.3 1390 27 1380.6 27.6 1373 28.2 1370.7 31 1366.4 36.2 1356.5 39.4 1335.4 39.3 1329.8 39.2 1324.1 39 1318.5 38.9 1303.1 38.8 1288.4 38.9 1275.6 40.6 1267.8 41.6 1263.2 43.5 1256.8 44.8 1248.2 46.5 1241.7 48.9 1229 49.4 1218.1 49.9 1211.1 52.9 1203.5 55 1200.9 55.8 1198.4 56.4 1193.8 56.2 1184.2 55.6 1178.6 57 1172.3 58.1 1160.4 60.3 1152.3 63.7 1140.8 66.1 1133.4 67.6 1125.4 68.8 1112.2 66.5 1103.6 65 1095.3 64.7 1088.1 65.6 1084 66.1 1078.5 66.5 1073.9 65.4 1061.3 62.4 1049.1 62.4 1036.7 61.3 1017.2 59.5 997.7 58.6 980.6 58.9 968.1 59.1 956.3 60.5 943.9 61.3 936.1 61.8 928.7 62.2 920 61.8 916.7 61.7 913.4 61.4 910.2 61.5 881.4 62 859.6 66.5 830 66.6 816.7 66.7 808.4 69.8 796.2 70 778.1 70.3 767.4 72.5 761.9 77 760.4 78.1 756.7 79.3 749.8 78.4 723.9 75.2 701.9 75.1 683.7 78.4 678.4 79.4 672.5 78.9 667.2 76.5 662.3 74.4 655.4 73.1 648.6 71.6 629.8 67.6 610 66.2 590.6 63.6 575 61.5 560.7 62.1 545.2 60 539.2 59.2 533.9 59.7 529.5 60.4 522.8 61.6 514.3 61.3 505.8 59.6 490 56.5 474.2 55.6 459.1 55 443.7 54.3 429.1 53.2 413.6 50.8 400.5 48.9 387 47.3 376.8 49.5 368 51.4 352.2 50.7 339.5 48.1 315.8 43.3 315.6 43.3 300.5 47.2 298.7 47.7 297.7 48.4 295.8 48.8 291.7 49.8 286.6 50.2 279.7 49.7 258.3 48.3 239.7 48.3 232 54 228.7 56.3 223 56.2 214 53.9 208.7 52.6 203.5 51.1 197.4 50.5 180.2 48.9 162.8 47.1 146.8 47.2 126 47.3 104.4 46.6 82.9 45.5 68 44.7 51.8 43.5 36 41.2 29.9 40.3 28.1 39.5 28.3 37.9 29.8 29.5 29.3 21 31.7 12.7 Z" fill="#232345"></path>
             </svg>
             </div>
             </div>
        )
    }
}

export default Another