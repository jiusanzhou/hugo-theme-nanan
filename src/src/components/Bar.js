import React from 'react'

import styles from './Bar.less'

const Bar = ({...props}) => {

    let categories = [
        {
            title: '心情',
            name: 'xxx',
            href: '#',
        },
        {
            title: '游记',
            name: 'xxx',
            href: '#',
        },
        {
            title: '感悟',
            name: 'xxx',
            href: '#',
        },
        {
            title: '技术',
            name: 'xxx',
            href: '#',
        },
        {
            title: '极限',
            name: 'xxx',
            href: '#',
        },
        {
            title: '心理',
            name: 'xxx',
            href: '#',
        },
    ]

    return <section {...props} >
    <div className={styles.bar}>
    <a href='#' active={""} >全部</a>
    {categories.map((item, index)=>(<a key={index} href={item.href} title={item.title}>{item.title}</a>))}
    </div>
    </section>
}

export default Bar