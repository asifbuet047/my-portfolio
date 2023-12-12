import { Avatar, Box, Divider, Typography } from '@mui/material'
import './App.css'
import HelloPage from './Components/Home/HelloPage/HelloPage'
import Services from './Components/Home/Services/Services'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Carousel } from 'flowbite-react'
import WorkIcon from '@mui/icons-material/Work';

function App() {
  const current = new Date();
  return (
    <div className='md:ml-20 md:mr-20'>
      <NavigationBar />
      <div className='flex flex-row gap-5'>
        <div className='w-fit border-4 border-[#2a2c39] rounded-lg pl-2 pr-2'>
          <Avatar
            alt='Me'
            sx={{ width: 256, height: 256 }}
            src='https://avatars.githubusercontent.com/u/17676209?s=400&u=d890076aed60d11568a1bcaba682d770ddccedbe&v=4' />

          <Typography
            paragraph
            noWrap
            sx={{ fontSize: '28px', fontWeight: 'bold' }}
          >MD ASIFUZZAMAN ASIF</Typography>
          <Divider light />
          <Typography
            noWrap
            sx={{ fontSize: '14px' }}
          >asifbuet047 · he/him</Typography>
          <Typography
            paragraph

            sx={{ fontSize: '10px' }}
          >{`Love to code and share my thoughts 
          among people to enrich life by new sustainable
           technology for betterment of my society
            and for my people.`}</Typography>

          <div className='flex flex-row justify-start items-center w-full'>
            <HomeWorkIcon />
            <Typography
              sx={{ fontSize: '14px', paddingLeft: '5px' }}
            >Bangladesh Power Development Board(BPDB)</Typography>
          </div>
          <div className='flex flex-row justify-start items-center w-full'>
            <LocationOnIcon />
            <Typography
              sx={{ fontSize: '14px', paddingLeft: '5px' }}
            >Dhaka, Bangladesh</Typography>
          </div>
          <div className='flex flex-row justify-start items-center w-full'>
            <WatchLaterIcon />
            <Typography
              sx={{ fontSize: '14px', paddingLeft: '5px' }}
            >{current.getUTCHours() + ":" + current.getUTCSeconds()}</Typography>
          </div>
          <div className='flex flex-row justify-start items-center w-full'>
            <EmailIcon />
            <Typography
              sx={{ fontSize: '14px', paddingLeft: '5px' }}
            >asifbuet047@gmail.com</Typography>
          </div>
          <Link href='https://drive.google.com/file/d/1w2t25grEFSBEnQTeNSZ7VDBNsJDvSTwZ/view?usp=sharing'>
            <Button
              variant='outlined'
              sx={{ borderRadius: 99999, marginTop: '10px' }}
              startIcon={<WorkIcon />}
            >Download my CV</Button>
          </Link>

        </div>
        <div className='w-full border-4 border-[#2a2c39] rounded-lg pl-2 pr-2'>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >Hi there! 👋</Typography>
          <Typography
            sx={{ fontSize: '14px', paddingLeft: '5px' }}
          >I'm MD ASIFUZZAMAN ASIF, a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer. With a strong foundation in full-stack web development, I thrive on turning innovative ideas into high-quality, scalable applications and user friendly applications.</Typography>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >🚀 Skills</Typography>
          <Box>
            <ul>
              <li><span className='font-bold'>Frontend:</span><span>React.js, MUO, HTML, CSS, JavaScript (ES6+)</span></li>
              <li><span className='font-bold'>Backend:</span><span>Node.js, Express.js, MongoDB, Mongoose</span></li>
              <li><span className='font-bold'>APIs:</span><span>RESTful APIs, GraphQL</span></li>
              <li><span className='font-bold'>Tools & Platforms:</span><span>Git, npm, Yarn, Babel</span></li>
              <li><span className='font-bold'>Deployment:</span><span>Vercel, Netlify</span></li>
            </ul>
          </Box>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >🌱 Always Learning</Typography>
          <Box>
            I'm a firm believer in continuous learning and staying up-to-date with the latest technologies. Whether it's exploring new frontend frameworks or diving into emerging backend technologies, I am committed to enhancing my skills and adapting to industry trends.
          </Box>

          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >📫 Let's Connect</Typography>
          <Box>
            {"I'm always open to collaboration, interesting projects, and connecting with fellow developers. Feel free to reach out to me via "}
            <Link href='https://www.linkedin.com/in/md-asifuzzaman-a4682188/'>Linkdin</Link>
          </Box>

          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >🌐 Portfolio</Typography>
          <Box>
            <span>Check out some of my work on </span>
            <Link href='https://github.com/asifbuet047'>GitHub</Link>
            <span> where you'll find a collection of projects showcasing my coding style and problem-solving approach.</span>
          </Box>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >My GitHub stats</Typography>
          <Box>
            <img src="https://github-readme-stats.vercel.app/api?username=asifbuet047&theme=radical&show_icons=true&hide_border=false&count_private=true" alt="Git streak" />
          </Box>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >My contribution and my public repos stats</Typography>
          <Box>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=asifbuet047&theme=cobalt" alt="Git streak" />
          </Box>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >My programming language stats</Typography>
          <Box>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=asifbuet047&theme=cobalt" alt="Git streak" />
          </Box>
          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >Technologies I know best</Typography>
          <Box>
            <img src="https://skillicons.dev/icons?i=c,css,html,firebase,git,github,js,nodejs,postman,tailwind,vite,react&perline=3" alt="Git streak" />
          </Box>

          <Typography
            sx={{ fontSize: '24px', paddingLeft: '5px' }}
          >My top projects details</Typography>
          <Divider />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Card sx={{ backgroundColor: '#2a2c39', color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Skill Share
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <li>Anyone can teach anybody from anywhere</li>
                  <li>One can sign in anytime and become a student</li>
                  <li>One can register with Google</li>
                  <li>Admin can see all useres activities</li>
                  <li>Admin can make anyone admin</li>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://assignment-12-skill-share.web.app/'}>Live site</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/skill-share-client'}>Client Code link</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/skill-share-server'}>Server Code link</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#2a2c39', color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Food Sharing
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <li>Anyone in a communitu canshare his/her leftover meal</li>
                  <li>One can sign in anytime and become a doner</li>
                  <li>One can register with Google</li>
                  <li>Admin can see all donation by all donars</li>
                  <li>Any valid user can access food</li>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://assignment-11-community-foods.web.app/'}>Live site</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/food-sharing-client'}>Client Code link</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/food-sharing-server'}>Server Code link</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#2a2c39', color: 'white' }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Brand Online Shop
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <li>Our project is Tech Brand Online Shop</li>
                  <li>This is e-commerce store where a user can buy tech products like smartphone,smartwatch,headphone etc</li>
                  <li>User can login via mail and password also new user can create acccount</li>
                  <li>If user already signed in Google at his browser he can login via Google</li>
                  <li>All products ar sorted here as their brand name</li>
                  <li>All home page user can see our current offer, our brands, our most sold product</li>
                  <li>User can add product in cart</li>
                  <li>All cart product can be shown by clicking My Cart button at navigation bar</li>
                  <li>User's profile image and his name is shown at navigation bar</li>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://assignment-10-brand-shop-b0762.web.app/'}>Live site</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/brand-shop-client'}>Client Code link</Link>
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  <Link href={'https://github.com/asifbuet047/brand-shop-server'}>Server Code link</Link>
                </Typography>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
