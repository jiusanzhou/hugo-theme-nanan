import React from 'react'

import styles from './Foot.less'

const Foot = ({...props}) => {

    let links = [
        {
            title: '故事伊始',
            href: '#',
        },
        {
            title: '与我联系',
            href: '#',
        },
        {
            title: '友情链接',
            href: '#',
        },
        {
            title: '好好工作',
            href: 'https://wellwell.work',
        },
    ]

    let license = {
        name: '',
        href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        description: '知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议',
    }

    let author = {
        name: '周筱鲁',
        href: 'https://blog.wellwell.work',
        base: '杭州',
        at: {
            name: '好好工作',
            href: 'https://wellwell.work'
        }
    }

    return <footer {...props} className={styles.footer}>
    <section>{links.map((item, index)=>(<a key={index} href={item.href} target="_blank">{item.title}</a>))}</section>
    <p>所有文章采用<a target='_blank' href={license.href}>{license.description}</a></p>
    <p>Make with ❤️ by <a href={author.href} target="_blank">{author.name}</a> from <a href={author.at.href} target="_blank">{author.at.name}</a>, {author.base}</p>
    </footer>
}

export default Foot