import React from 'react'
import { Tab } from 'semantic-ui-react'
import Frontend from './Frontend'

const panes = [
    { menuItem: 'Frontend', render: () => <Tab.Pane><Frontend /></Tab.Pane>}
]

const Nav = () => <Tab panes={panes}/>

export default Nav