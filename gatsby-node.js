exports.createPages = ({ graphql }) => {

	return new Promise(resolve => {

		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								slug
							}
						}
					}
				}
			}
		`).then(() => resolve())
	})
}