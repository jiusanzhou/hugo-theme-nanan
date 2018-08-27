import React from 'react'

import styles from './Article.less'
import { Link } from 'dva/router';

const Article = ({ data }) => {
    return <article className={styles.article}>
    <section className={styles.info}>
        <h3><Link to={data.path} target='_blank' title={data.title}>{data.title}</Link></h3>
        <p>{data.abstract}</p>
        <div className={styles.meta}>
            <section className={styles.author}>
                <a href="#"><strong>{data.author.name}</strong></a>
            </section>
            <section className={styles.category}>
            
            </section>
            <section className={styles.tags}>
            {data.tags.map((item, index)=>(<a key={index} href={item.permalink} target='_self'>{item.name}</a>))}
            </section>
            <section className={styles.time}>
                <time>{(new Date(typeof data.time==='int'?data.time:Date.parse(data.time))).toLocaleDateString()}</time>
            </section>
        </div>
    </section>
    <section className={styles.cover}>
        {
            data.covers.length>0?
            <a title={data.covers[0].title||data.title} style={{backgroundImage: `url(${data.covers[0].url})`}}></a>:null
        }
    </section>
    </article>
}

export default Article