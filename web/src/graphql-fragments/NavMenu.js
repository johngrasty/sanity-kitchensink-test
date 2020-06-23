import { graphql } from "gatsby";

export const NavMenu = graphql`
  fragment NavMenu on SanityNavigationMenu {
    title
    items {
      ... on SanityMenuBranch {
        _key
        _type
        title
        menuItem {
          title
          slug {
            current
          }
        }
        submenuItems {
          title
          kind
          link
          route
          internalPageRoute {
            ... on SanityPage {
              id
              _type
              slug {
                current
              }
            }
          }
        }
      }
      ... on SanityMenuItem {
        title
        kind
        link
        route
        internalPageRoute {
          ... on SanityPage {
            id
            _type
            slug {
              current
            }
          }
        }
      }
    }
  }
`;
