import React from 'react'

import Social from './Social'

import styles from  './Cover.less'

const Cover = ({...props}) => {

    let site = {
        title: '南安说',
        href: '/',
        avatar: 'https://avatars2.githubusercontent.com/u/39580782?s=460&v=4',
        description: '不把生命献给无知、平庸和低俗!',
        bio: '你的余生都在我这里!',
    }

    let socials = [
        {
            type: 'weibo',
            id: 'jiusanzhou',
        },
        {
            type: 'email',
            id: 'zoe@wellwell.work',
        },
        {
            type: 'github',
            id: 'jiusanzhou',
        },
    ]

    return <section {...props}>
    <div className={styles.cover}>
        <h2>{site.title}</h2>
        <blockquote>{site.description}</blockquote>
        <blockquote>{site.bio}</blockquote>
        <section>{socials.map((item, index)=>(<Social data={item} key={index} />))}</section>
    </div>
    </section>
}

export default Cover