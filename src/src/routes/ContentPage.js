import React from 'react'

import Layout from '../layout'

import ViewPage from '../pages/View'


const Content = () => {
    return <Layout hiddenCover={false} hiddenNav={true}>
        <ViewPage />
    </Layout>
}

export default Content