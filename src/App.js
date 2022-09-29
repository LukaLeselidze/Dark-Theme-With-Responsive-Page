import './App.css';
import Cards from './Cards';
import facebok from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import Overviews from './Overviews';
import theme1 from './images/theme-icon.svg'
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import iconup from './images/icon-up.svg'
import icondown from './images/icon-down.svg'


export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='app' id={theme} >
          <div className='wrapper' >
            <div className='main'>
              <h2 className='h2'>Social Media Dashboard</h2>
              <p className='followers'>Total Followers: 23,004</p>
              <span className='line'></span>
              <div className='dark-mode'>
                <p className='dark'>Dark Mode</p>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
              </div>
            </div>
            <div className='cardcontainer'>
              <Cards color={'greentoday'} icon={iconup} className={'container'} img={facebok} username={'@nathanf'} h1={1987} p={'Followers'} today={'12 Today'} />
              <Cards color={'greentoday'} icon={iconup} className={'container'} img={twitter} username={'@nathanf'} h1={'1044'} p={'Followers'} today={'99 Today'} />
              <Cards color={'greentoday'} icon={iconup} className={'linear'} img={instagram} username={'@realnathanf'} h1={'11K'} p={'Followers'} today={'1099 Today'} />
              <Cards color={'redtoday'} icon={icondown} className={'darker'} img={youtube} username={'@nathan F.'} h1={8239} p={'Subscribers'} today={'144 Today'} />
            </div>
            <h3>Overview - Today</h3>
            <div className='overviewcontainer'>
              <Overviews color={'greencolor'} icon={iconup} title={'Page Views'} className={'overview-card'} img={facebok} amount={87} p={'3%'} />
              <Overviews color={'redcolor'} icon={icondown} title={'Likes'} className={'overview-card'} img={facebok} amount={52} p={'2%'} />
              <Overviews color={'greencolor'} icon={iconup} title={'Likes'} className={'overview-card'} img={instagram} amount={5462} p={'2257%'} />
              <Overviews color={'greencolor'} icon={iconup} title={'Profile Views'} className={'overview-card'} img={instagram} amount={'52K'} p={'1375%'} />

              <Overviews color={'greencolor'} icon={iconup} title={'Retweets'} className={'overview-card'} img={twitter} amount={117} p={'303%'} />
              <Overviews color={'greencolor'} icon={iconup} title={'Likes'} className={'overview-card'} img={twitter} amount={507} p={'553%'} />
              <Overviews color={'redcolor'} icon={icondown} title={'Likes'} className={'overview-card'} img={youtube} amount={107} p={'19%'} />
              <Overviews color={'redcolor'} icon={icondown} title={'Total Views'} className={'overview-card'} img={youtube} amount={1407} p={'12%'} />
            </div>

          </div>
        </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App;
