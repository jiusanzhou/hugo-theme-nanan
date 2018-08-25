import React from 'react'

import styles from './Nav.less'

const Nav = ({...props}) => {

    let site = {
        title: '安南说',
        href: '/',
        avatar: 'https://avatars2.githubusercontent.com/u/39580782?s=460&v=4',
        description: '不把生命献给无知、平庸和低俗!',
    }

    let menus = [
        {
            title: '首页',
            icon: '',
            href: '#',
        },
        {
            title: '归档',
            icon: '',
            href: '#',
        },
        {
            title: '标签',
            icon: '',
            href: '#',
        },
        {
            title: '关于',
            icon: '',
            href: '#',
        },
    ]

    return <section {...props}>
    <a className={styles.logo} href={site.href} title={`${site.title} - ${site.description}`}><img className={styles.avatar} alt={`${site.title} - ${site.description}`} src={site.avatar} /></a>
    <h1 className={styles.siteTitle}><a title={`${site.title} - ${site.description}`} href={site.href}>{site.title}</a></h1>
    <blockquote className={styles.description}>{site.description}</blockquote>
    <nav className={styles.nav}>{menus.map((m, index)=>(<a key={index} className={styles.item} href={m.href} title={m.title}>{m.title}</a>))}</nav>
    </section>
}

export default Nav