import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from '../../data'

const useStyles = makeStyles({
  list: {
    width: '33.33%',
  },
  links: {
    textDecoration:'none',
    color: '#000',
    width: '100%',
  },
  menuHeader: {
    paddingLeft: '30px',
  },
  wrapperInner: {
    padding: '5px',
  },
})

function SubMenu(children) {
  const classes = useStyles()
  const [menu, setMenu] = useState({})
  const [selected, setSelected] = useState(false)

  const handleClick = item => {
    setMenu(prevMenu => (
      {[item]: !prevMenu[item]}
    ))
  }

  const updateSelected = selectedIndex => {
    setSelected(selectedIndex)
  }

  return children.map(subOption => (
    !subOption.children ?
      <div key={subOption.name}>
        <ListItem 
          button 
          key={subOption.name}
          selected={selected === subOption.name}
          onClick={() => {
            handleClick(subOption.name)
            updateSelected(subOption.name)
          }}
        >
          <Link 
            to={subOption.url}
            className={classes.links}>
            <ListItemText 
              inset 
              primary={subOption.name} 
            />
          </Link>
        </ListItem>
      </div> :
      <div key={subOption.name}>
        <ListItem
          button 
          onClick={() => {
            handleClick(subOption.name)
            updateSelected(subOption.name)
          }}
          selected={selected === subOption.name}
        >
          <ListItemText
            inset 
            primary={subOption.name}
          />
          {menu[subOption.name] ? 
            <ExpandLess /> :
            <ExpandMore />
          }
        </ListItem>
        <Collapse 
          in={menu[subOption.name]}
          timeout="auto" 
          unmountOnExit
          classes={{ wrapperInner: classes.wrapperInner }}
        >
          {SubMenu(subOption.children)}
        </Collapse>
      </div>
  ))
}

const SimpleMenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.list}>
      <Drawer 
        variant="persistent" 
        anchor="left"
        open
        classes={{ paper: classes.list }}>
        <div>
          <List>
            <ListItem 
              key="menuHeading"
              divider
              disableGutters
            >
              <ListItemText
              className={classes.menuHeader}
                inset
                primary="Nested Menu"
              />
            </ListItem>
            {SubMenu(menuItems.data)}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default SimpleMenu
