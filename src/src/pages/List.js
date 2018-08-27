import React from 'react'

import Article from '../components/Article'

import styles from './List.less'

const ListPage = () => {

    // 1. 列出条数
    // 2. 翻页栏目

    let data = {
        posts: [
            {
                title: '构建人脸识别聊天机器人--Wechaty Blinder',
                abstract: '这是我在2017-北京-谷歌开发者节 TensorFlow 分会场的分享，本次活动是由谷歌（中国）、谷歌北京开发者社区主办，北京邮电大学协办的2017谷歌开发者节北京站在北京邮电大学圆满举办。',
                content: null,
                time: '2018-01-25T15:04:27.000Z',
                comments: true,
                slug: '2018-01-25-how-to-build-face-blinder-bot',
                tags: [
                    {
                        name: 'wechaty',
                        slug: 'wechaty',
                        permalink: '#',
                    }
                ],
                keywords: [
                    {
                        name: 'wechaty',
                        slug: 'wechaty',
                        permalink: '#',  
                    }
                ],
                covers: [
                    {
                        title: '',
                        url: 'https://lijiarui.github.io/img/2017/how-to-build-a-chatbot-cover.jpg',
                    }
                ],
                permalink: '#',
                path: '/p/test',
                meta: {},
                author: {
                    name: '周筱鲁',
                    id: 'jiusanzhou',
                    href: '/author/jiusanzhou',
                    avatar: 'https://avatars2.githubusercontent.com/u/39580782?s=460&v=4',
                    bio: '余生从此开始！',
                }
            }
        ],
        totalPage: 10,
        currentPage: 2,
        pagePrefix: '/page'
    }

    for (var i=0; i<10; i++) data.posts.push(data.posts[0])

    let pagers = [1, 2, 3, 4, 5]

    return <section>
    <section>{data.posts.map((item, index)=>(<Article key={index} data={item} / >))}</section>
    <div className={styles.pager}>
    {data.currentPage!==1?<a className={styles.pagerExtend} href={`${data.pagePrefix}/${data.currentPage-1}`}>前一页</a>:null}
    {pagers.map((item, index)=>(<a key={index} className={styles.pagerNum} current={data.currentPage===item?"":undefined} href={`${data.pagePrefix}/${item}`}>{item}</a>))}
    {data.currentPage!==data.totalPage?<a className={styles.pagerExtend} href={`${data.pagePrefix}/${data.currentPage+1}`}>下一页</a>:null}
    </div>
    </section>
}

export default ListPage