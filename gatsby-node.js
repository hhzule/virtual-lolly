const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
    query MyQuery {
        lollies {
          getLolly {
            first
            from
            giftedto
            message
            second
            third
            url
          }
        }
      }
      
      
      `);


    data.lollies.getLolly.forEach((d) => {
        console.log(d.first, "in")
        createPage({
            path: `lolly/${d.url}`,
            component: path.resolve(`./src/template/newlolly.tsx`),
            context: d,
        });
    });
};

exports.onCreatePage = async ({ page, actions }) => {
    // const { createPage } = actions;

    // if (page.path.match(/^\/lollies/)) {
    //     page.matchPath = "/lollies/*";

    //     // Update the page.

    //     createPage(page);
    // }
};



