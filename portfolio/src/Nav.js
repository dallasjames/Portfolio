import React from 'react'
import { Tab } from 'semantic-ui-react'
import Frontend from './Frontend'
import Backend from './Backend'

const panes = [
    { menuItem: 'Frontend', render: () => <Tab.Pane><Frontend /></Tab.Pane>},
    { menuItem: 'Backend', render: () => <Tab.Pane><Backend /></Tab.Pane> }
]

const Nav = () => <Tab panes={panes}/>

export default Nav