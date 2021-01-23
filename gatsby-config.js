module.exports = {
    //! Site Meta Data
    siteMetadata: {
        title: "Resume",
        description: `Rahi Khan's Resume`,
        author: `Rahi Khan`,
        siteUrl: `https://resume.rahikhan.vercel.com`,
    },

    //! External Gatsby Plugins
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `./src/data/`,
                ignore: [`**/\.*`], //! ignore files starting with a dot
            },
        },

        //! "Offline-plugin" will always be after "Manifest-plugin"
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `Resume`,
                short_name: `Resume`,
                description: `Rahi Khan's Resume`,
                lang: `en`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `./src/images/resume-icon.png`,
            },
        },
        "gatsby-plugin-offline",
    ],
};
