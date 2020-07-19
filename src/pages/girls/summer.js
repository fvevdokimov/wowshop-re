import React from "react"
import {CatalogPage} from "../../templates/catalog";

const IndexPage = ({data}) => <CatalogPage data={data} type="girls" season="summer"/>

export default IndexPage

export const pageQuery = graphql`
    query {
        allStrapiItem {
            edges {
                node {
                    id
                    name
                    price
                    for
                    seasons
                    images {
                        localFile {
                           publicURL
                           childImageSharp {
                               fluid(maxWidth: 412, maxHeight: 412) {
                                   ...GatsbyImageSharpFluid_noBase64
                               }
                           }
                        }
                    }
                    type {
                        id
                        shortname
                        fullnameboy
                        fullnamegirl
                    }
                    sizetable {
                        id
                        size
                    }
                }
            }
        }
        allStrapiType {
            edges {
                node {
                    id
                    shortname
                    fullnameboy
                    fullnamegirl
                }
            }
        }
        banner: file(relativePath: { eq: "banner.png" }) {
           childImageSharp {
               fixed(width: 787, height: 310) {
                   ...GatsbyImageSharpFixed
               }
           }
        }
        banner_mobile: file(relativePath: { eq: "banner_mobile.png" }) {
           childImageSharp {
               fixed(width: 411, height: 334) {
                   ...GatsbyImageSharpFixed
               }
           }
        }
    }
`
