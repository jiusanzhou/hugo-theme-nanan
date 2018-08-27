import React from 'react'

import Nav from '../components/Nav'
import Cover from '../components/Cover'
import Bar from '../components/Bar'
import Foot from '../components/Foot'

import 'normalize.css'

import styles from './index.less'

const Layout = ( { children, hiddenCover, hiddenNav }) => {

    // 1. flex显示
    // 2. 自适应大小

    return <div className={styles.main}>
        <Nav className={styles.nav} style={hiddenNav?{display:'none'}:null} />
        <Cover className={styles.cover} style={hiddenCover?{display:'none'}:null} />
        <section className={styles.container}>
            <Bar className={styles.bar} />
            <section className={styles.containerMain} >{children}</section>
            <Foot className={styles.foot} />
        </section>
    </div>
}

export default Layout