import React from "react";
import logodark from '../assets/logo-dark.png'
import logolight from '../assets/logo-light.png'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
 
const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

const logopath = "../assets/";
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium font-montserrat">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white dark:text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Sports
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-none lg:block">
          <MenuItem>Basketball</MenuItem>
          <MenuItem>American Football</MenuItem>
          <MenuItem>Baseball</MenuItem>
          <MenuItem>Soccer</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-none lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium font-montserrat"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white dark:text-black">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium font-montserrat"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white dark:text-black">
          Membership
        </ListItem>
      </Typography>
      
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium font-montserrat"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white dark:text-black">Contact</ListItem>
      </Typography>
    </List>
  );
}
 
export default function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState(false);
  
  function toggleTheme(){
    // setDarkMode(!darkMode)
    setDarkMode(prevMode => !prevMode)
  }

  React.useEffect(()=> {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const outlinedButtonClass = "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-md";
  const whitebtn = "text-black bg-white";
 
  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 rounded-none bg-black dark:bg-white" color="">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={darkMode ? logodark: logolight} alt="" className="h-14 w-auto max-w-full max-h-full object-contain"/>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <IconButton variant="text" color="white" className="dark:text-black">
            <SunIcon className="h-6 w-6" onClick={toggleTheme}/>
          </IconButton>
          
          <Button size="sm" className={darkMode ? '' : outlinedButtonClass}>Get Started</Button>
          <Button variant="outlined"  size="sm" className={darkMode ? '' : whitebtn} >
            Login
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth>
            Get Started
          </Button>
          <Button variant="outlined" size="sm" fullWidth>
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}