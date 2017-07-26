/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("pageService", pageService);

    function pageService() {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];


        var api = {
            "createPage": createPage,
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage,
        };
        return api;

        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            page._id = (new Date()).getTime() + "";
            pages.push(page);
            return page;

        }

        function findPagesByWebsiteId(websiteId){
            var allPages = [];

            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    allPages.push(pages[p]);
                }
            }

            return allPages;

        }

        function findPageById(pageID){
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    return pages[p];
                }
            }

            return null;

        }

        function updatePage(pageId, page){
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages[p] = page;
                    return;
                }
            }

            return null;

        }

        function deletePage(pageId){
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages.splice(p, 1);
                    return;
                }
            }

            return null;

        }

    }
})();