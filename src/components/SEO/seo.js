// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// const SEO = ({ description, lang, meta, keywords, title }) => {
//   return (
//     <StaticQuery
//       query={detailsQuery}
//       render={data => {
//         const metaDescription =
//           description || data.site.siteMetadata.description
//           console.log(data)
//         return (
//           <Helmet
//             htmlAttributes={{
//               lang,
//             }}
//             title={title}
//             titleTemplate={`%s | ${data.site.siteMetadata.title}`}
//             meta={[
//               {
//                 name: `description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:title`,
//                 content: title,
//               },
//               {
//                 property: `og:description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:type`,
//                 content: `website`,
//               },
//               {
//                 name: `twitter:card`,
//                 content: `summary`,
//               },
//               {
//                 name: `twitter:creator`,
//                 content: data.site.siteMetadata.author,
//               },
//               {
//                 name: `twitter:title`,
//                 content: title,
//               },
//               {
//                 name: `twitter:description`,
//                 content: metaDescription,
//               },
//             ]
//               .concat(
//                 keywords.length > 0
//                   ? {
//                       name: `keywords`,
//                       content: keywords.join(`, `),
//                     }
//                   : []
//               )
//               .concat(meta)}
//           />
//         )
//       }}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   keywords: [],
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

// export default SEO

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `

//Son SEO
import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

const SEO = memo(props => {
  const { title, description, image } = props

  return (
    <Helmet>
      <title>{title ?? 'NVNGUYEN - Vinh Nguyen Developer'}</title>
      <meta
        name="description"
        content={description || 'NVNGUYEN - Vinh Nguyen Developer'}
      />
      <meta itemprop="name" content={title ?? 'NVNGUYEN - Vinh Nguyen Developer'} />
      <meta
        itemprop="description"
        content={description || 'NVNGUYEN - Vinh Nguyen Developer'}
      />
      <meta itemprop="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nvnguyen" />
      <meta name="twitter:creator" content="@nvnguyen" />
      <meta
        name="twitter:title"
        content={title ? `Vinh Nguyen: ${title}` : `NVNGUYEN - Vinh Nguyen Developer`}
      />
      <meta
        name="twitter:description"
        content={`SEODescription` || `NVNGUYEN - Vinh Nguyen Developer`}
      />
      {/* <meta name="twitter:image" content={SEOImageURL || fallbackLogo} /> */}
      <meta
        property="og:title"
        content={title ? `Vinh Nguyen: ${title}` : 'NVNGUYEN - Vinh Nguyen Developer'}
      />
      {/* <meta property="og:image" content={SEOImageURL || fallbackLogo} /> */}
      <meta property="og:image:width" content={1200} />
      <meta property="og:image:height" content={600} />
      {/* <meta property="og:type" content={SEOIsArticle ? 'article' : 'website'} /> */}
      {/* <meta
        property="og:description"
        content={SEODescription || fallbackDescription}
      /> */}
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content="https://www.nvnguyen.com/" />
      <link rel="canonical" href="https://www.nvnguyen.com/" />
      <meta
        name="facebook-domain-verification"
        content="yftph99ln6t2q5v3om8t5jcd9id5dx"
      />
    </Helmet>
  )
})

export default SEO
