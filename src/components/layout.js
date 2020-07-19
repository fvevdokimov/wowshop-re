/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useLayoutEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children, className, innerClassName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    useLayoutEffect(() => {
        if(window) {
            const listener = () => {
                window.document.documentElement.dataset.scroll = window.scrollY;
            }
            if(window.document.documentElement.dataset.scroll === undefined) {
                window.document.documentElement.dataset.scroll = 0;
            }
            window.document.addEventListener('scroll', listener)
            return () => window.document.removeEventListener('scroll', listener)
        }
    })

  return (
      <div className={className}>
          <div
              style={{
                  margin: `0 auto`,
                  maxWidth: 1170,
                  paddingTop: 0,
              }}
          >
              <main className={innerClassName}>{children}</main>
              <footer>
              </footer>
          </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
