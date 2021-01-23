//// Code in this file is run once in the process of building your site

//! Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`);
};
